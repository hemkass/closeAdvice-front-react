import { BackMovie, Movie } from '@/models/movie'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MoviesState {
	movies: BackMovie[]
	IMDBMovies: Movie[]
	movie: Movie | null
	loading: boolean
	error: string | null
}

// Initialisation de l'état initial
const initialState: MoviesState = {
	movies: [],
	IMDBMovies: [],
	movie: null,
	loading: false,
	error: null,
}

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		fetchImDBMovies(state, action: PayloadAction<Movie[]>) {
			state.loading = false
			state.IMDBMovies = action.payload
		},
		fetchMoviesSaved(state, action: PayloadAction<BackMovie[]>) {
			state.loading = false
			state.movies = action.payload
		},
	},
})

// Export des actions générées automatiquement et du réducteur
export const { fetchImDBMovies, fetchMoviesSaved } = moviesSlice.actions
export default moviesSlice.reducer
