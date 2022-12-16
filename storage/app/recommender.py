import pandas as pd
import pymysql
from surprise import Dataset, Reader, SVD
from surprise.model_selection import cross_validate
import difflib
import random
import plotly.express as px
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

import time

# Import data from database with info of database below
host = '127.0.0.1'
port = int(3306)
passw = 'password'
user = 'sail'
db = 'recipe_app_web'
# Make connection to database
conn = pymysql.connect(host=host, port=port, user=user, passwd=passw, db=db)


# Read sql entries through query
def read_dbs():
    metadata = pd.read_sql("SELECT * FROM recipes", conn)
    ratings_data = pd.read_sql("SELECT * FROM recipe_user", conn)
    users = pd.read_sql("SELECT * FROM users", conn)
    return metadata, ratings_data, users


def get_recipe_id(recipe_name, metadata):
    """
    Gets the recipe ID for a recipe name based on the closest match in the metadata dataframe.
    """

    existing_names = list(metadata['name'].values)
    closest_names = difflib.get_close_matches(recipe_name, existing_names)
    recipe_id = metadata[metadata['name'] == closest_names[0]]['id'].values[0]
    return recipe_id


def get_recipe_info(recipe_id, metadata):
    """
    Returns some basic information about a recipe given the recipe id and the metadata dataframe.
    """

    recipe_info = metadata[metadata['id'] == recipe_id][['id', 'image_url', 'ingredients', 'name', 'directions']]
    return recipe_info.to_dict(orient='records')


def predict_review(user_id, recipe_name, model, metadata):
    """
    Predicts the review (on a scale of 1-5) that a user would assign to a specific recipe.
    """

    recipe_id = get_recipe_id(recipe_name, metadata)
    review_prediction = model.predict(uid=user_id, iid=recipe_id)
    return review_prediction.est


def generate_recommendation(user_id, model, metadata, thresh):
    """
    Generates a recipe recommendation for a user based on a rating threshold. Only
    recipe with a predicted rating at or above the threshold will be recommended
    """

    recipe_names = list(metadata['name'].values)
    random.shuffle(recipe_names)

    seconds_till_timeout = 3.3
    timeout = time.time() + seconds_till_timeout

    for recipe_name in recipe_names:
        rating = predict_review(user_id, recipe_name, model, metadata)
        if rating >= thresh:
            recipe_id = get_recipe_id(recipe_name, metadata)
            return rating, recipe_id
        if time.time() > timeout:
            return 0, 0


def get_random_recipe(metadata):
    recipe_names = list(metadata['id'].values)
    random.shuffle(recipe_names)
    return recipe_names[0]


def get_recipe_index(recipe_id, metadata):
    i = metadata.index[metadata['id'] == recipe_id].tolist()
    return i[0]


def plot_recommendation(user_id, recipe_id, filename):
    recipe_ids = ratings_data[ratings_data['user_id'] == user_id]['recipe_id'].tolist()
    recipe_ids.append(recipe_id)
    plot_recipes(recipe_ids, user_id, filename)


def find_color(recipe_id, user_id):
    entry = ratings_data[(ratings_data['user_id'] == user_id) & (ratings_data['recipe_id'] == recipe_id)].dropna()
    if entry.empty:
        return 'black'
    rating = int(entry['rating'])
    if rating >= 4:
        return 'green'
    else:
        return 'red'


def find_all_colors(recipe_ids, user_id):
    colors = []
    for recipe_id in recipe_ids:
        colors += [find_color(recipe_id, user_id)]
    return colors


def plot_recipes(ids, user_id, filename):
    recipe_indices = []
    for recipe in ids:
        recipe_indices.append(get_recipe_index(recipe, metadata))

    recipe_vector_df = projection.iloc[recipe_indices]

    text_colors = find_all_colors(ids, user_id)
    fig = px.scatter(recipe_vector_df, x='x', y='y', text='name')

    fig.for_each_trace(lambda t: t.update(textfont_color=text_colors, textposition='top center'))
    # These lines add a legend to the plot (can be deleted)
    fig.add_annotation(
        text="Green = Score of +4 <br> Red = Score of -4 <br> Black = Recommended",
        align="left",
        showarrow=False,
        xref="paper",
        yref="paper",
        font=dict(color="black", size=10),
        y=1,
        x=1,
        xanchor="right",
    )
    # fig.show()

    fig.write_image(filename)


metadata, ratings_data, users = read_dbs()

reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(ratings_data[['user_id', 'recipe_id', 'rating']], reader)

start = time.time()

svd = SVD(verbose=True, n_epochs=10)
cross_validate(svd, data, measures=['RMSE', 'MAE'], cv=3, verbose=True)

trainset = data.build_full_trainset()
svd.fit(trainset)

# Standardize data (mu = 0, sigma = 1)
svd_scaled = StandardScaler().fit_transform(svd.qi)
# Use PCA (that holds the distances after dimensionality being reduced)
pca = PCA(n_components=2)
recipes_embedding = pca.fit_transform(svd_scaled)

projection = pd.DataFrame(columns=['x', 'y'], data=recipes_embedding)
projection['name'] = metadata['name']

end = time.time()
print("totale tijd:", end-start)

to_write = []
for user_id in users["id"]:
    for _ in range(5):
        est_rating, recipe_id = generate_recommendation(user_id, svd, metadata, 5)

        certain = (est_rating / 5) * 100

        if certain == 0:
            recipe_id = get_random_recipe(metadata)

        filename = "U" + str(user_id) + "R" + str(recipe_id) + ".png"
        plot_recommendation(user_id, recipe_id, filename)
        # Certainty op 0 als "random recommend"
        to_write.append((user_id, recipe_id, filename, certain))


cur = conn.cursor()
cur.execute("TRUNCATE TABLE recommendations")
for item in to_write:
    sql = """insert into recommendations (user_id, recipe_id, image_url, certainty)
            values (%s, %s, %s, %s)"""
    cur.execute(sql, (item[0], item[1], 'public/' + item[2], item[3]))
conn.commit()
print("DONE")


