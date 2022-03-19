import React, { useEffect } from 'react'
import dreamer from '../files/dreamer.png'
import Particles from 'react-tsparticles'
import * as options from '../static/options.json'
import './header.scss'

function Header() {
	return (
		<header className='welcome'>
			<Particles options={options} className='tsparticles' />

			<div className='welcome-img'>
				<figure>
					<h1 className='mobHello'>Привет!</h1>
					<br></br>
					<img
						className='me'
						src={dreamer}
						width='1420'
						height='760'
						alt='Моя фотография. Я стою в горах и улыбаюсь'></img>
					<p></p>
					<figcaption>Это я</figcaption>
				</figure>
			</div>
			<div className='welcome-text'>
				<h2 className='pcHello'>Привет!</h2>
				<br></br>
				<h3>
					Меня зовут Илья, я учусь в университете и занимаюсь web-разработкой.
					<br /> Я считаю, что программирование - это искусство, всегда ответственно подхожу к порученным мне
					задачам и люблю чёрный чай больше чем зелёный.
				</h3>
			</div>
			<div className='arrow'>
				<i className='fa fa-arrow-down' aria-hidden='true'></i>
			</div>
		</header>
	)
}

export default Header
