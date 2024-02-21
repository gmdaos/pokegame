<template>
  <div v-if="!pokemon" class="loader__content">
    <div class="loader"></div>
  </div>
  <article v-else class="article__wrapper fade-in">
    <h1 class="article__title">Quien es ese Pokemon?git</h1>

    <PokemonPicture :pokemonId="pokemon.id" :itsTrue="revelPokemon" />

    <PokemonOptions
      :listPokemons="listPokemons"
      @selection="checkAnswer"
      :pokemonId="pokemon.id"
    />
    <div
      v-if="showAnswer"
      :class="[{ 'fade-in': showAnswer }, { 'fade-out': !showAnswer }]"
    >
      <h2 :class="{ article__msg: msg }">{{ msg }}</h2>
      <button @click="newGame" class="btn">Otras vez :3</button>
    </div>
  </article>
</template>

<script>
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import getPokemonsOptions from '../helpers/getPokemons.js';
export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      listPokemons: [],
      pokemon: null,
      revelPokemon: false,
      showAnswer: false,
      msg: null,
    };
  },
  methods: {
    async mixPokemons() {
      this.listPokemons = await getPokemonsOptions();
      const randomInt = Math.floor(Math.random() * 4);
      this.pokemon = this.listPokemons[randomInt];
    },
    checkAnswer(pokemonId) {
      if (this.pokemon.id === pokemonId) {
        this.revelPokemon = true;
        this.msg = `Correcto!!! es: ${this.pokemon.name}`;
        this.showAnswer = true;
      } else {
        this.msg = 'Intenta nuevamente';
      }
    },
    async newGame() {
      this.pokemon = null;
      this.showAnswer = false;
      this.msg = '';
      this.mixPokemons();
      this.revelPokemon = false;
    },
  },
  mounted() {
    this.mixPokemons();
  },
};
</script>

<style></style>
