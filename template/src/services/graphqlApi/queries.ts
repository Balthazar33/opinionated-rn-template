export const getAllPokemon = `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        name
        url
      }
    }
  }`;

export const getDetails = `query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      weight
    }
  }`;
