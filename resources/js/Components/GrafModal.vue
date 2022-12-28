<template>
    <div class="modal-overlay z-40 cursor-zoom-out" @click="$emit('close-modal')">
      <div class="modal z-50 py-4">
        <img class=" modal object-contain center py-4" v-bind:src= imageModal alt="" />
        <h1 class="text-white mx-4 max-w-3xl">This plot shows all of the recipes you have rated. The ones you have rated four
        or more are in green and the others are in red. Your recommendation is in black. Recipes
        that are rated similarly by similar users are closer to each other on the plot.</h1>
      </div>

    </div>
  </template>

  <script>
    export default {
        name: 'GrafModal',
        props: {
            imageModal: String,
    },

  }
  </script>



<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
    align-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: transparent;
    margin: auto auto auto auto;
}

</style>
