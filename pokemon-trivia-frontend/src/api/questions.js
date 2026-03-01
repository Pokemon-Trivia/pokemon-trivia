const API = import.meta.env.VITE_POKE_API;

export const getPokemon = async(id) => {
   try {
      const response = await fetch(API + `pokemon/${id}`);
      const pokemon = await response.json();
      const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      const type = pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)
      const pokeData = {
         id,
         name,
         imgUrl: pokemon.sprites.other[`official-artwork`].front_default,
         type
      }
      return pokeData;
   } catch (error) {
      console.log(error)
   }
}