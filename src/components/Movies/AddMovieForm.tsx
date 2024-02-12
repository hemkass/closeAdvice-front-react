import React from 'react'
import { useForm } from 'react-hook-form'
const AddMovieForm = () => {
	type FormInputs = {
		title: string
		lastName: string
	}
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<FormInputs>()

	const onSubmit = (data) => {
		console.log(data)
	}

	console.log(errors)

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				<div className='mb-4'>
					<div className='flex flex-col w-full gap-2 '>
						<div className='flex justify-between'>
							<label htmlFor='1' className='font-semibold capitalize'>
								title
							</label>
						</div>
						<input
							className='w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60'
							type='password'
							{...register('title', {
								required: true,
							})}
						/>

						{errors.title && <p className='errorMsg'>Title is required.</p>}
					</div>
				</div>

				<div>
					<button type='submit'>Login</button>
				</div>
			</form>{' '}
		</div>
	)
}
export default AddMovieForm
