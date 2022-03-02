import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './app.scss'
import './scripts/particles.min.js'
import { useSpring, animated } from 'react-spring'
import Header from './components/header.js'
import Modal from './components/modal.js'
import Instruments from './components/instruments.js'
import Portfolio from './components/portfolio.js'
import Contact from './components/contact.js'

function App() {
	const [modalState, changeState] = useState({
		state: 0,
		modalImg: undefined,
		modalTitle: '',
		modalDesc: '',
		modalSite: '',
		modalSrc: '',
	})
	useEffect(() => {
		particlesJS.load('particles-js', './particles.json') //maybe delete from app...
	}, [])
	const bodyFade = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

	function toggleModal(img, title, desc, site, src) {
		modalState.state === 0
			? changeState({
					state: 1,
					modalTitle: title,
					modalImg: img,
					modalDesc: desc,
					modalSite: site,
					modalSrc: src,
			  })
			: changeState({ state: 0 })
	}

	return (
		<animated.div style={bodyFade} className='app-wrapper'>
			<Modal
				exit={toggleModal}
				state={modalState.state}
				img={modalState.modalImg}
				title={modalState.modalTitle}
				desc={modalState.modalDesc}
				site={modalState.modalSite}
				src={modalState.modalSrc}
			/>

			<Header />

			<Instruments />

			<Portfolio toggler={toggleModal} />

			<Contact />
		</animated.div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
