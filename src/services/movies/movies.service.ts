import { BackMovie } from './../../models/movie'
import { MoviesApi } from '@/api/movies/movies.api'
import { Movie } from '@/models/movie'

export const MoviesService = {
	async getMoviesFromTMDBByTitle(title: string): Promise<Movie[]> {
		console.log('hello service', title)
		const moviesList = await MoviesApi.getMovieFromTmdbByTitle(title)
		console.log('movieList from service', moviesList)
		return moviesList.results
	},
	async saveMovie(movie: BackMovie) {
		return await MoviesApi.saveMovie(movie)
	},
	async getAllMovieSaved(): Promise<BackMovie[]> {
		console.log('service get movie backend')
		return await MoviesApi.getAllMoviesSaved()
	},
}
