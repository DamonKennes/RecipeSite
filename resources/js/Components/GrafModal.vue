<template>
    <div class="modal-overlay z-40 cursor-zoom-out" @click="$emit('close-modal')">
        <img class="modal object-contain center z-50 py-4" v-bind:src= imageModal alt="" />
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
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: transparent;
}

</style>
