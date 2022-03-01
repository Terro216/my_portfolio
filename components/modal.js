import React from 'react'
import './modal.scss'

function Modal(props) {
	if (props.state === 1) {
		return (
			<div className='modal-wrapper'>
				<div className='close' onClick={props.exit}></div>
				<div className='modal'>
					<div className='close-cross' onClick={props.exit}>
						X
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
			</div>
		)
	} else {
		return <div></div>
	}
}

export default Modal
