import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
   movie:null,
  },
  reducers: {
 
   
    addMovie: (state, action) => {
      state.movie = action.payload;
    },
    removeMovie: state => {
      state.move =null;
    },
  }, });

export const { addMovie, removeMovie  } = movieSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMovie = state => state.movie.movie;

export default movieSlice.reducer;
