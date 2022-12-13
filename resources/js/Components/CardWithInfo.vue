<template>
    <div class="flex">
      <div class="w-1/2">
        <CardForRec
        :image = imageRecipe
        :name = name
        :score = score
        :id = id
        @open-recipe="onClick"
        />
      </div>
      <div class="w-1/2">
        <GrafiekCard
        :image = imageGraf
        :percent = perc
        />
      </div>
    </div>
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
