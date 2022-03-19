import React, { useState } from 'react'
import './modal.scss'
import { useTransition, animated } from 'react-spring'

function Modal(props) {
	if (props.state === 1) {
		const [show, set] = useState(false)
		const transitions = useTransition(show, {
			from: { opacity: 0 },
			enter: { opacity: 1 },
			leave: { opacity: 0 },
			reset: true,
			reverse: true,
		})
		function close() {
			set(!show)
			props.exit()
		}
		return transitions(({ opacity }) => (
			<animated.div
				style={{ opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }) }}
				className='modal-wrapper'>
				<div className='close' onClick={close}></div>
				<div className='modal'>
					<div className='close-cross' onClick={props.exit}>
						<i className='fas fa-times fa-2x'></i>
					</div>
					<div className='title'>
						<h2>{props.title}</h2>
					</div>
					<div className='img-wrapper'>
						<img className='img' src={props.img} alt={'скриншот сайта. ' + props.title} />
					</div>
					<div className='desc'>
						<h3>{props.desc}</h3>
					</div>
					<div className='links'>
						{props.site !== 0 ? (
							<a href={props.site} className='link' target='_blank'>
								Посмотреть сайт
							</a>
						) : (
							<></> //''
						)}
						{props.src !== 0 ? (
							<a href={props.src} className='link' target='_blank'>
								Посмотреть код
							</a>
						) : (
							<></>
						)}
					</div>
				</div>
			</animated.div>
		))
	} else {
		return <div></div>
	}
}

export default Modal
