<template>
    <div class="p-4">
    <div v-on:click="onClick()" class="w-60 rounded overflow-hidden shadow-lg h-full">
      <img class="w-full" v-bind:src = image alt="Pasta">
      <div class="px-6 py-4">
          <div class="font-bold text-xl">{{name}}</div>
          <Stars class="mt-auto" :initial-rating="score" @change-rating="updateRating"></Stars>
      </div>
    </div>
    </div>
</template>


<script>
//import StarRating from 'vue-star-rating';

import Stars from "@/Components/Stars.vue";
import {Inertia} from "@inertiajs/inertia";
export default {
  name: 'Card',
  components: {
      Stars,
  },
  props: {
    name: String,
    score: Number,
    image: String,
    id: Number,
  },
  methods: {
    onClick() {
      this.$emit('open-recipe');
    },
      updateRating (val){
          Inertia.patch('/recipes/' + this.id, {rating: val});
      }
  },
};
</script>
