import React from "react";
import dreamer from '../files/dreamer.jpg';
import './header.scss'
import { useSpring, config } from "react-spring"

function Header() {
return(
    <header className='welcome'>
        <div id="particles-js"></div>
                <div className='welcome-text'>
                    <h1>Привет!</h1><br></br>
                    <h3>Меня зовут Илья, я несколько лет занимаюсь web-разработкой и поддержкой сайтов различной сложности в интернете. Я считаю, что создание сайтов - это искусство и всегда ответственно подхожу к порученым мне задачам.</h3>
                    
                </div>

                <div className='welcome-img'>
                <figure>
                    <img className='me' src={dreamer}>
                    </img>
                    <p></p>
                    <figcaption>Это я</figcaption>
                </figure>
                </div>
                <div className='arrow'>
                    <i className="fa fa-arrow-down" aria-hidden="true" ></i>
                </div>
            </header>
);
}

export default Header;