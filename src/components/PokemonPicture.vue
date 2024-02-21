<template>
  <div class="article__img">
    <img :class="[{img:!itsTrue}, { show: itsTrue }]" :src="imgSrc()" alt="Pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    itsTrue: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      // pokemonId: this.pokemonId,
    };
  },
  methods: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style></style>
