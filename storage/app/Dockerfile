FROM python:3.10

ADD recommender.py .

RUN pip install pandas scikit-learn surprise pymysql kaleido plotly cryptography

CMD ["python", "recommender.py"]
