<template>
    <div class="flex">
      <Card
      :image = imageRecipe
      :name = name
      :score = score
      />
      <GrafiekCard 
      :image = imageGraf
       />
    </div>
</template>
  
  
  <script>
  import Card from './Card.vue';
  import GrafiekCard from './GrafiekCard.vue';

  export default {
    name: 'CardWithInfo',
    components: {
        Card,
        GrafiekCard,
    },
    props: {
        score: Number,
        name: String,
        imageGraf: String,
        imageRecipe: String,
    },
    methods: {
      onClick() {
        console.log('click');
        //this.$emit('open-recipe');
      },
    },
  };
  </script>