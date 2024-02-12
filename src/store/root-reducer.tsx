import { combineSlices } from '@reduxjs/toolkit'
import moviesReducer from './movies/movies.slice'

export const rootReducer = combineSlices({ movie: moviesReducer })
