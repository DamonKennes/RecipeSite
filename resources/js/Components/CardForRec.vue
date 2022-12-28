<template>
    <div class="p-4">
    <div class="flex flex-row justify-between w-full rounded overflow-hidden shadow-lg h-full">
        <div v-on:click="onClick()" class="cursor-pointer flex flex-col justify-between mb-4 w-1/2">
        <div>
        <img class="w-full" :src = image alt="Image">
          <div class="font-bold text-md px-6 pt-4">{{name}}</div>
    </div>
    </div>
        <hr/>
        <div @click="showModal = true" class="cursor-zoom-in w-1/2">
            <img class="w-full" :src= imageModal alt="Recommendation">
            <div class="font-semibold text-md text-center mb-4">{{percent}}% confidence</div>
        </div>
        <GrafModal :imageModal=imageModal v-show="showModal"  @close-modal="showModal = false"/>
    </div>
    </div>
</template>


<script>
//import StarRating from 'vue-star-rating';

import Stars from "@/Components/Stars.vue";
import {Inertia} from "@inertiajs/inertia";
import GrafModal from "@/Components/GrafModal.vue";
export default {
  name: 'Card',
  components: {
      GrafModal,
      Stars,
  },
  props: {
    name: String,
    score: Number,
    image: String,
      imageModal: String,
    id: Number,
      percent: Number,
  },
  methods: {
    onClick() {
      this.$emit('open-recipe');
    },
      updateRating (val){
          Inertia.patch('/recipes/' + this.id, {rating: val});
      }
  },
    data() {
      return {
          showModal: false,
      }
    }
};
</script>

<style scoped>
hr {
    min-height: 100%;
    max-height: 100vh;
    margin: 0;
    border-width: 1px;
    margin-right: 5px;
    margin-top: auto;
    margin-bottom: auto;
}
</style>
