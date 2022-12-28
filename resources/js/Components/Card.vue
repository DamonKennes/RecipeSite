<template>
    <div class="p-4">
    <div v-on:click="onClick()" :class="fwidth ? ['w-full'] : ['w-48']" class="rounded overflow-hidden shadow-lg h-full cursor-pointer flex flex-col justify-between">
        <div>
      <img class="w-full" v-bind:src = image alt="Image">
        <div class="font-bold text-md px-6 pt-4">{{name}}</div>
        </div>
        <Stars class="mt-auto px-6 pb-4" :initial-rating="score" @change-rating="updateRating"></Stars>
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
    fwidth: {
        type: Boolean,
        default: false,
    }
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
