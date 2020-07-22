import React, { useState, useEffect } from 'react'

import './Navbar.css'

const Navbar = () => {
	const [show, handleShow] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true)
			} else handleShow(false)
		})
		return () => {
			window.removeEventListener('scroll')
		}
	}, [])

	return (
		<div className={`navbar ${show && 'navbar_black'}`}>
			<img
				className='navbar_logo'
				src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png'
				alt='Netflix Logo'
			/>
			<img
				src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
				alt='Netflix avatar'
				className='navbar_avatar'
			/>
		</div>
	)
}

export default Navbar
