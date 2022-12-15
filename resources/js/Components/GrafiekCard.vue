<template>
    <div  class="p-4 h-full">  
      <div v-on:click="showModal = true" class="w-40 rounded overflow-hidden shadow-lg h-full">
        <img class="w-full" v-bind:src= image alt="Recommendation">
        <div class="px-6 py-4">
          <div class="font-bold text-xl">Confidence:</div>
          <div class="font-bold text-xl">{{percent}}%</div>
      </div>
      </div>
      <GrafModal :imageModal=image v-show="showModal"  @close-modal="showModal = false"/>
    </div>
  </template>
    

    <script>
    import GrafModal from './GrafModal.vue';

    export default {
      name: 'GrafiekCard',
      components: {
        GrafModal,
      },
      props: {
        image: String,
        percent: Number,

      },
      methods: {
        onClick() {
          console.log('click grafiek');
          //this.$emit('open-recipe');
        },
      },
      data() {
        return {
          showModal: false,
        }
      },
    };
    </script>