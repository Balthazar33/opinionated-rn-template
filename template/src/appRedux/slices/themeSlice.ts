import {createSlice} from '@reduxjs/toolkit';
import {resetAll} from '../appActions';

export enum THEMES {
  DARK = 'dark',
  LIGHT = 'light',
}

const initialState = {
  currentTheme: THEMES.LIGHT,
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, {payload}) => {
      state.currentTheme = payload;
    },
  },
  extraReducers(builder) {
    // reset state
    builder.addCase(resetAll, () => initialState);
  },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
