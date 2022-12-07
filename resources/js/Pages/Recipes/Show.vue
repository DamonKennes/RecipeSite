<template>
    <div class="flex md:justify-center">
        <!-- back-button, but link might need to change -->
        <a @click="back" class="fixed left-0 top-0 m-3 md:px-1 hover:shadow-inner hover:shadow-gray-400 text-xl md:text-3xl font-bold">&larr;</a>
        <img :src="recipe.image_url" :alt="recipe.name" class="rounded-b-lg w-full md:w-auto">
    </div>
    <h1 class="text-4xl text-center">{{recipe.name}}</h1>
    <hr class="w-1/2 relative left-1/4"/>
    <div class="p-2 text-center">
        <h3 class="text-lg">Your rating</h3>
        <Stars :initial-rating="recipe.rating" @change-rating="updateRating" :interactive=true></Stars>
    </div>
    <div class="columns-1 md:columns-2 text-left items-start">
        <div class="p-6 md:pl-20 md:break-inside-avoid-column">
            <h3 class="text-lg">Ingredients</h3>
            <hr/>
            <ul class="list-disc list-outside"><li v-for="i in ingredients">{{i}}</li></ul>
        </div>
        <div class="p-6 md:pr-20 md:break-inside-avoid-column">
            <h3 class="text-lg">Instructions</h3>
            <hr/>
            <ol class="list-decimal list-outside"><li v-for="step in directions">{{step}}</li></ol>
        </div>
    </div>
</template>

<script>
import Stars from "@/Components/Stars.vue";
import {Inertia} from "@inertiajs/inertia";
export default {
    name: "Show",
    components: {Stars},
    props: {
        recipe: Object,
    },
    methods: {
         back(){
            return window.history.back();
         },
        updateRating (val){
            Inertia.patch('/recipes/' + this.recipe.id, {rating: val});
        }
    },
    computed: {
        ingredients() {
            // i just took the string from in the csv under ingedients (which does not have amounts for the ingedients?)
            // and parsed it based on that, so if something different will be send in our app, this will need to change
            return this.recipe.ingredients.split("^")
        },

        directions() {
            // same as with ingredients
            // return this.recipe.directions.substring(17, this.recipe.directions.length-2).split("\n")
            return this.recipe.directions.substring(17, this.recipe.directions.length-2).split("\\n").slice(6)
        }
    },
}
</script>

<style scoped>

</style>
