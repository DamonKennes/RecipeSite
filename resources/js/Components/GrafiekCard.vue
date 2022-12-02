<template>
    <div  class="flex p-10">  
      <div v-on:click="onClick()" class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" v-bind:src= image alt="Pasta">
      </div>
    </div>
  </template>
    

    <script>
    export default {
      name: 'GrafiekCard',
      components: {
      },
      props: {
        image: String,
      },
      methods: {
        onClick() {
          console.log('click grafiek');
          //this.$emit('open-recipe');
        },
      },
    };
    </script>