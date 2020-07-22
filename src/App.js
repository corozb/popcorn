import React from 'react'
import './App.css'

import Banner from './components/Banner/Banner'
import Row from './components/Row/Row'
import request from './utils/request'

function App() {
	return (
		<div className='app'>
			<Banner />
			<Row title='Trending Now' fetchUrl={request.trending} isLargeRow={true} />
			<Row title='NEFTLFIX ORIGINALS' fetchUrl={request.netflixOriginals} />
			<Row title='Top Rated' fetchUrl={request.topRated} />
			<Row
				title='Action and adventure on crime'
				fetchUrl={request.actionMovies}
			/>
			<Row title='Comedy Movies' fetchUrl={request.comedyMovies} />
			<Row title='Horror Movies' fetchUrl={request.horrorMovies} />
			<Row title='Emotic Movies' fetchUrl={request.romanceMovies} />
			<Row title='Documentary Feature' fetchUrl={request.documentaries} />
		</div>
	)
}

export default App
