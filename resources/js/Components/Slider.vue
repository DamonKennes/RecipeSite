<template>
    <div>
        <h1 class="text-xl text-grey m-4 font-bold">{{text}}</h1>
        <vue-horizontal class="mx-6">
            <Card v-for="recipe in data"
            :name="recipe.name"
                                        :score="recipe.pivot.rating"
                                        :id="recipe.id"
                                        :image="recipe.image_url"
                                        @open-recipe="openRecipe(recipe)"
            ></Card>
        </vue-horizontal>
    </div>
</template>


  <script>
  import VueHorizontal from "vue-horizontal";
  import {Inertia} from "@inertiajs/inertia";
  import Card from './Card.vue';
  export default {
    name: 'HorizonSlider',
    components: {
        VueHorizontal,
        Card
    },
    props: {
        data: {
            type: Object,
            default: () => ({}),
        },
        text: String,
    },
    methods: {
      openRecipe(recipe){
            Inertia.get('/recipes/' + recipe.id);
        }
    },
    watch: {
        search(value){
            Inertia.get(
                "/recipes",
                { query: value },
                {
                    preserveState: true,
                }
            );
        }
    }
  };
  </script>
