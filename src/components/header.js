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
                    <h3>Меня зовут Илья, я несколько лет занимаюсь разработкой и поддержкой сайтов различной сложности в интернете. Некоторые из них сложнее, чем другие, но в то же время есть и те, которые являются более простыми. Сложность и простота определяются множеством факторов, которые оказывают значительное влияние на определение таких понятий, как сложность или простота.</h3>
                    
                </div>

                <div className='welcome-img'>
                <figure>
                    <img className='me' src={dreamer}>
                    </img>
                    <p></p>
                    <figcaption>Это я. Преисполнился в своем познании.</figcaption>
                </figure>
                </div>
                <div className='arrow'>
                    <i className="fa fa-arrow-down" aria-hidden="true" ></i>
                </div>
            </header>
);
}

export default Header;