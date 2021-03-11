const baseUrl = 'https://pokeapi.co/api/v2';

const ENDPOINTS = {
    pokemonList: 'pokemon/'
};

export const getPokemonList = (limit, offset = 0) => {
    let url = `${baseUrl}/${ENDPOINTS.pokemonList}`;

    if (limit && limit !== 0) {
        url += `?limit=${limit}`;
    }

    if (offset && offset !== 0) {
        url += `&offset=${offset}`;
    }

    return fetch(url);
};
