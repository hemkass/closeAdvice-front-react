import { MovieSearch } from './../../models/movie.search'
import { BackMovie } from '@/models/movie'

import { defaultConfig } from '@/api/http/httpConfig'
import { HttpClient } from '@/api/http/httpClient'
import { baseUrl } from '@/api/baseUrl'
import { Movie } from '@/models/movie'

export const MoviesApi = {
	async getMovieFromTmdbByTitle(title: any): Promise<MovieSearch> {
		console.log('api', baseUrl)
		const movies = await HttpClient.get(
			`${baseUrl}/movies/details/${title}`,
			defaultConfig
		)
		console.log('api get movie backend', movies)
		return movies.data
	},
	async getAllMoviesSaved(): Promise<BackMovie[]> {
		const movies = (
			await HttpClient.get(`${baseUrl}/movies/saved/all`, defaultConfig)
		).data
		console.log('api get movie backend', movies)
		return movies
	},

	async saveMovie(movie: BackMovie) {
		return await HttpClient.post(`${baseUrl}/movies/save`, movie, defaultConfig)
	},
}
