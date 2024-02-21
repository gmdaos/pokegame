import pokemonApi from '../api/pokemonApi';
const getPokemonsArr = () => {
  const pokemonsArr = Array.from(Array(649));
  return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonsOptions = async () => {
  const mixPokemons = getPokemonsArr().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonNames(mixPokemons.splice(0, 4));
  return pokemons;
};

const capitalize = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
const getPokemonNames = async ([a, b, c, d] = []) => {

  const promisesArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];
  const res = await Promise.all(promisesArr);
  const pokename = [];
  res.forEach((pokemon) => {
    pokename.push({ name: capitalize(pokemon.data.name), id: pokemon.data.id });
  });
  return pokename;
};

export default getPokemonsOptions;
