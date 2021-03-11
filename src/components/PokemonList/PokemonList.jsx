import React from 'react';
import { getPokemonList } from '../../services/api';
import { setItem, getItem } from '../../utils/storage';
import Pokemon from '../Pokemon/Pokemon';
import './PokemonList';

class PokemonList extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemonList: []
        };
    }

    async componentDidMount() {
        let storedPokemonList = getItem('pokemonList');
        console.log('storage: ', storedPokemonList);
        if (!storedPokemonList) {
            console.log('inside if');
            const pokemonPromise = await getPokemonList(151);
            const pokemonList = await pokemonPromise.json();
            setItem('pokemonList', pokemonList);
        }

        storedPokemonList = getItem('pokemonList');
        this.setState({ pokemonList: storedPokemonList.results });
    }

    render() {
        const { pokemonList } = this.state;
        return (
            <div className='pokedex-main-container'>
                {pokemonList.length > 0 &&
                    pokemonList.map((pokemon, index) => <Pokemon pokemon={pokemon} key={index} />)}
            </div>
        );
    }
}

export default PokemonList;
