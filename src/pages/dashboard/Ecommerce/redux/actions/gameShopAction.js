// @flow
import { PokemonActionTypes } from './constantes';

type PokemonAction = { type: string, payload: {} | string };

export const Pokemoncomprar = (cant: number, pokemon: number): PokemonAction => ({
    type: PokemonActionTypes.BUY_POKEMON,
    payload: { cant, pokemon },
});
export const Pokemonretornar = (cant: number, pokemon: number): PokemonAction => ({
    type: PokemonActionTypes.RETURN_POKEMON,
    payload: { cant, pokemon },
});
