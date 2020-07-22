import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

import axios from '../../utils/axios'
import requests from '../../utils/request'
import './Banner.css'

const Banner = () => {
	const [movie, setMovie] = useState([])
	const [trailerUrl, setTrailerUrl] = useState('')

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.trending)
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			)
			return request
		}
		fetchData()
	}, [])

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	}

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl('')
		} else {
			movieTrailer(movie?.original_title || movie?.original_name || '')
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search)
					setTrailerUrl(urlParams.get('v'))
				})
				.catch((error) => console.log(error))
		}
	}

	console.log(movie)

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str
	}

	return (
		<>
			<header
				className='banner'
				style={{
					backgroundSize: 'cover',
					backgroundImage: `url('http://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
					backgroundPosition: 'center center',
				}}>
				<div className='banner_content'>
					<h1 className='banner_content-title'>
						{movie?.title || movie?.name || movie?.original_title}
					</h1>
					<div className='banner_buttons'>
						<button
							className='banner_button'
							onClick={() => handleClick(movie)}>
							Play
						</button>
						<button className='banner_button'>My List</button>
					</div>
					<h1 className='banner_description'>
						{truncate(movie?.overview, 150)}
					</h1>
				</div>
				<div className='banner_fadeButton'></div>
			</header>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</>
	)
}

export default Banner
