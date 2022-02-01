import React, { useRef, useState } from "react"
import "./portfolio.scss"
import m from "../files/mariam.png"
import cinema from "../files/cinema.png"
import diary from "../files/diary.png"
import drum from "../files/drum.png"
import quotes from "../files/quotes.png"
import ren from "../files/ren.png"
import { useSpring, animated } from "react-spring"

const Card = (props) => {
	const calc = (x, y, rect) => [
		-(y - rect.top - rect.height / 2) / 20,
		(x - rect.left - rect.width / 2) / 20,
		1.1,
	]
	const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
	const ref = useRef(null)
	const [xys, set] = useState([0, 0, 1])
	const config = {
		mass: 1,
		tension: 100,
		friction: 26,
		clamp: false,
		precision: 0.01,
		velocity: 0,
		easing: (t) => t,
	}
	const s = useSpring({ xys, config })
	return (
		<animated.div
			className="card"
			onClick={props.toggler}
			ref={ref}
			style={{ transform: s.xys.to(trans) }}
			onMouseLeave={() => set([0, 0, 1])}
			onMouseMove={(e) => {
				const rect = ref.current.getBoundingClientRect()
				set(calc(e.clientX, e.clientY, rect))
			}}>
			<div className="card-img-wrapper">
				<img className="card-img" src={props.img}></img>
			</div>
		</animated.div>
	)
}

function Portfolio(props) {
	return (
		<main className="portf">
			<h1>Мои работы:</h1>
			<div className="cards">
				<Card
					img={cinema}
					toggler={() => {
						props.toggler(
							cinema,
							"Онлайн-кинотеатр",
							"Полностью рабочий кинотеатр с функциями поиска по фильмам, просмотра по жанрам и детальным описанием всех фильмов. Разработка велась на React/SCSS/react-routing + работа с api",
							"https://terro216.github.io/cinema-react",
							"https://github.com/Terro216/cinema-react"
						)
					}}
				/>

				<Card
					img={m}
					toggler={() => {
						props.toggler(
							m,
							"Персональная страница для менеджера по туризму",
							"Одностраничный сайт с функцией отправки электронных писем(php), подключением iframe'ов с сайтов других туроператоров и записью в поездки(SQL). Разработка велась на HTML/CSS/Bootstrap/PHP. Один из первых сайтов",
							"http://mariamedtours.ru/",
							0
						)
					}}
				/>

				<Card
					img={drum}
					toggler={() => {
						props.toggler(
							drum,
							"Drum Pad Machine",
							"Можно играть разные мелодии, нажимая на клавиши клавиатуры (или кнопки на экране). Реализована возможность смены громкости и состояния(вкл/выкл), переключения инструментов и воспроизведения заранее заданных или случайных мелодий. Разработка велась на HTML/SCSS/React",
							"https://terro216.github.io/fcc-portfolio/js/drum_machine/dist/index.html",
							"https://github.com/Terro216/fcc-portfolio/tree/main/js/drum_machine/src"
						)
					}}
				/>

				<Card
					img={ren}
					toggler={() => {
						props.toggler(
							ren,
							"Редактор Текста",
							"Markdown редактор с динамичным предпросмотром результата",
							"https://terro216.github.io/fcc-portfolio/js/react-markdown/dist/index.html",
							"https://github.com/Terro216/fcc-portfolio/tree/main/js/react-markdown/src"
						)
					}}
				/>

				<Card
					img={quotes}
					toggler={() => {
						props.toggler(
							quotes,
							"Цитаты известных людей",
							"Небольшое приложение, показывающее случайные цитаты известных людей по нажатию кнопки. Есть возможность поделиться в соц. сетях",
							"https://terro216.github.io/fcc-portfolio/js/random_quote/dist/index.html",
							"https://github.com/Terro216/fcc-portfolio/tree/main/js/random_quote/src"
						)
					}}
				/>

				<Card
					img={diary}
					toggler={() => {
						props.toggler(
							diary,
							"Дневник",
							"Чистая HTML/CSS верстка по заданному макету за 1 день",
							0,
							"https://github.com/Terro216/diary-project"
						)
					}}
				/>
			</div>
		</main>
	)
}

export default Portfolio
