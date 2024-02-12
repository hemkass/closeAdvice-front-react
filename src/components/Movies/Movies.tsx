import { MoviesService } from '@/services/movies/movies.service'
import { useAppDispatch } from '@/store/hooks'
import { fetchImDBMovies, fetchMoviesSaved } from '@/store/movies/movies.slice'
import { useEffect, useState } from 'react'
import { Modal } from '../modal'
import AddMovieForm from './AddMovieForm'

const MovieTab = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		const fetchMovies = async () => {
			const moviesList = await MoviesService.getAllMovieSaved()
			dispatch(fetchMoviesSaved(moviesList))
		}
		/* fetchMovies() */
	}, [])

	const fetchIMDBMovies = async () => {
		const movieDetails =
			await MoviesService.getMoviesFromTMDBByTitle('inception')
		dispatch(fetchImDBMovies(movieDetails))
	}

	const [showModal, setShowModal] = useState(false)

	return (
		<div>
			<h1 className='text-3xl font-bold underline'>Mes films </h1>
			<button
				className='py-2 px-4 bg-blue hover:bg-gray-100 text-white-800 font-semibold'
				onClick={() => setShowModal(!showModal)}>
				Ajouter un film
			</button>
			<div>
				{showModal && (
					<Modal setShowModal={setShowModal} title='Ajouter mon film'>
						<AddMovieForm />
					</Modal>
				)}
			</div>
		</div>
	)
}
export default MovieTab
