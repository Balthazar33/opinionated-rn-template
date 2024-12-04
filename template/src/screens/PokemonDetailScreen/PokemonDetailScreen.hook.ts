import {useEffect} from 'react';

import {getDetails} from './PokemonDetailScreen.utils';
import {clearCurrent} from '@/appRedux/slices/pokemonSlice';
import {useAppDispatch, useAppSelector} from '@/appRedux/store.utils';
import {useLazyGetDetailsByNameQuery} from '@/services/testApi/pokemonApi';

export const usePokemonDetailScreen = (name?: string) => {
    const [trigger] = useLazyGetDetailsByNameQuery();
    const {currentPokemon} = useAppSelector(state => state.pokemon) || {};
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (name) {
            getDetails({apiCall: trigger, params: {name}, dispatch});
        }
        return () => {
            dispatch(clearCurrent());
        };
    }, [trigger, dispatch, name]);

    return {currentPokemon};
};
