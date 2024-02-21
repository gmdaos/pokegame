<template>
  <article class="list__wrapper">
    <div class="list__content">
      <button
        v-for="{ name, id } in listPokemons"
        :class="['list__item', { active: istTrue && pokemonId === id }]"
        :key="id"
        @click="$emit('selection', id), handlerCLick(id)"
        :disabled="istTrue && pokemonId !== id"
      >
        {{ name }}
      </button>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    listPokemons: {
      type: Array,
      required: true,
    },
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  emits: ['selection'],
  data() {
    return {
      istTrue: false,
    };
  },
  methods: {
    handlerCLick(id) {
      if (this.pokemonId === id) {
        this.istTrue = true;
      }
    },
  },
};
</script>

<style></style>
