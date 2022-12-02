<template>
  <div  class="p-10">  
    <div v-on:click="onClick()" class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" v-bind:src = image alt="Pasta">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{name}}</div>
      </div>
      <star-rating :rating="score" :read-only="true" :increment="1"></star-rating>
    </div>
  </div>
</template>


<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'Card',
  components: {
    StarRating
  },
  props: {
    name: String,
    score: Number,
    image: String,

  },
  methods: {
    onClick() {
      console.log('click card');
      //this.$emit('open-recipe');
    },
  },
};
</script>