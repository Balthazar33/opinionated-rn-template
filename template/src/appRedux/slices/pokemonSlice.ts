import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {resetAll} from '../appActions';
import {PokemonItemType} from '../../screens/ApiCallScreen/ApiCallScreen.types';

interface CurrentPokemon {
  name: string;
  url?: string;
  weight?: number;
}

interface PokemonState {
  all: PokemonItemType[];
  currentPokemon: CurrentPokemon;
}

const initialState: PokemonState = {
  all: [],
  currentPokemon: {
    name: '',
  },
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setAll: (state, {payload}: PayloadAction<PokemonItemType[]>) => {
      state.all = payload;
    },
    setPokemonDetails: (state, {payload}: PayloadAction<PokemonItemType>) => {
      state.currentPokemon = payload;
    },
    clearCurrent: state => {
      state.currentPokemon = initialState.currentPokemon;
    },
  },
  extraReducers: builder => {
    // reset state
    builder.addCase(resetAll, () => initialState);
  },
});

export const {setAll, setPokemonDetails, clearCurrent} = pokemonSlice.actions;
export default pokemonSlice.reducer;
