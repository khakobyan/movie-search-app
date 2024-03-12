import { combineReducers } from '@reduxjs/toolkit';
import { moviesSlice } from './movies/slice';

const rootReducer = combineReducers({
  [moviesSlice.name]: moviesSlice.reducer,

});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
