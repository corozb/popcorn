import React, { useState, useEffect } from 'react'

import axios from '../../utils/axios'
import './Row.css'

const base_url = 'http://image.tmdb.org/t/p/original'

const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl)
			setMovies(request.data.results)
			return request
		}
		fetchData()
	}, [])

	console.log(movies)

	return (
		<div className='row'>
			<h2>{title}</h2>
			<div className='row_posters'>
				{movies.map((movie) => (
					<img
						key={movie.id}
						className={`row_posters-image ${isLargeRow && 'row_postersLarge'}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	)
}

export default Row
