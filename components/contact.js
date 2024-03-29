import React from 'react'
import './contact.scss'

function Contact() {
	return (
		<div className='contact'>
			<h1>Связаться со мной:</h1>
			<a
				className='contact-mail'
				href='mailto:me@ilyamed.site'
				onClick={() => {
					navigator.clipboard.writeText('me@ilyamed.site')
					document.getElementsByClassName('contact-mail')[0].innerText = 'Адрес скопирован'
				}}>
				Написать на почту
			</a>

			<div className='contact-buttons'>
				<div className='contact-button'>
					<a href='https://vk.com/ilya_med' target='_blank' className='fab fa-vk'></a>
				</div>
				<div className='contact-button'>
					<a href='https://t.me/Terroo' target='_blank' className='fab fa-telegram'></a>
				</div>
				<div className='contact-button'>
					<a href='https://github.com/Terro216' target='_blank' className='fab fa-github'></a>
				</div>
				<div className='contact-button'>
					<a href='https://www.instagram.com/ilyamed216/' target='_blank' className='fab fa-instagram'></a>
				</div>
			</div>
		</div>
	)
}

export default Contact
