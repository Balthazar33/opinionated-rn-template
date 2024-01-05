import {createSlice} from '@reduxjs/toolkit';
import {resetAll} from '../appActions';

const initialState = {
  loading: false,
};

// slice for app-level ephemeral data (loading state, network state etc.)
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, {payload}) => {
      state.loading = payload;
    },
  },
  extraReducers(builder) {
    // reset state
    builder.addCase(resetAll, () => initialState);
  },
});

export const {setLoading} = appSlice.actions;
export default appSlice.reducer;
