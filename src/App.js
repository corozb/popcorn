import React from 'react'
import './App.css'

import Row from './Row'
import request from './request'

function App() {
	return (
		<>
			<h1>Popcorn</h1>
			<Row title='NEFTLFIX ORIGINAS' fetchUrl={request.netflixOriginals} />
			<Row title='Trending' fetchUrl={request.trending} />
		</>
	)
}

export default App
