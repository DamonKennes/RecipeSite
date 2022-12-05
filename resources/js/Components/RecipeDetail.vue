<script>
import Stars from "./Stars.vue";

export default {
    data() {
        return {
            id: 87211,
            name: "Chicken Pesto Paninis",
            image_url : "/956156.jpg",
            ingredients_string: "focaccia bread quartered^prepared basil pesto^diced cooked chicken^diced green bell pepper^diced red onion^shredded Monterey Jack cheese",
            directions_string: "{'directions': u'Prep\n15 m\nCook\n5 m\nReady In\n20 m\nPreheat a panini grill.\nSlice each quarter of focaccia bread in half horizontally. Spread each half with pesto. Layer bottom halves with equal amounts chicken, bell pepper, onion, and cheese. Top with remaining focaccia halves, forming 4 sandwiches.\nGrill paninis 5 minutes in the preheated grill, or until focaccia bread is golden brown and cheese is melted.'}",
            rating: 4.625  // this is the rating given by other people, but currently not used
        }
    },

    computed: {
        ingredients() {
            // i just took the string from in the csv under ingedients (which does not have amounts for the ingedients?)
            // and parsed it based on that, so if something different will be send in our app, this will need to change
            return this.ingredients_string.split("^")
        },

        directions() {
            // same as with ingredients
            return this.directions_string.substring(17, this.directions_string.length-2).split("\n").slice(6)
        }
    },

    components: {
        Stars
    }
}

</script>
<template>
    <div class="flex md:justify-center">
        <!-- back-button, but link might need to change -->
        <a href="/" class="fixed left-0 top-0 m-3 md:px-1 hover:shadow-inner hover:shadow-gray-400 text-xl md:text-3xl font-bold">&larr;</a>
        <img :src="image_url" :alt="name" class="rounded-b-lg w-full md:w-auto">
    </div>
    <h1 class="text-4xl">{{name}}</h1>
    <hr class="w-1/2 relative left-1/4"/>
    <div>
        <h3 class="text-lg">Your rating</h3>
        <Stars />
    </div>
    <div class="columns-1 md:columns-2 text-left items-start">
        <div class="p-6 md:pl-20">
            <h3 class="text-lg">Ingredients</h3>
            <hr/>
            <ul class="list-disc list-outside"><li v-for="i in ingredients">{{i}}</li></ul>
        </div>
        <div class="p-6 md:pr-20 md:break-before-column">
            <h3 class="text-lg">Instructions</h3>
            <hr/>
            <ol class="list-decimal list-outside"><li v-for="step in directions">{{step}}</li></ol>
        </div>
    </div>
    
</template>