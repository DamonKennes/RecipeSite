<template>
        <CardForRec
        :image = imageRecipe
        :name = name
        :score = score
        :id = id
        :image-modal= imageGraf
        @open-recipe="onClick"
        :percent= perc
        />
</template>


  <script>
  import CardForRec from './CardForRec.vue';
  import GrafiekCard from './GrafiekCard.vue';

  export default {
    name: 'CardWithInfo',
    components: {
        CardForRec,
        GrafiekCard,
    },
    props: {
        score: Number,
        name: String,
        imageGraf: String,
        imageRecipe: String,
        id: Number,
        perc: Number
    },
    methods: {
      onClick() {
        this.$emit('open-recipe');
      },
    },
  };
  </script>
