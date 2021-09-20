import React from "react";
import dreamer from '../files/dreamer.png';
import './header.scss'

function Header() {
return(
    <header className='welcome'>
        <div id="particles-js"></div>
        <div className='welcome-img'>
                <figure>
                    <h1 className='mobHello'>Привет!</h1><br></br>
                    <img className='me' src={dreamer}>
                    </img>
                    <p></p>
                    <figcaption>Это я</figcaption>
                </figure>
                </div>
                <div className='welcome-text'>
                    <h1 className='pcHello'>Привет!</h1><br></br>
                    <h3>Меня зовут Илья, я несколько лет занимаюсь web-разработкой и поддержкой сайтов различной сложности в интернете. Я считаю, что создание сайтов - это искусство и всегда ответственно подхожу к порученным мне задачам.</h3>
                    
                </div>

                
                <div className='arrow'>
                    <i className="fa fa-arrow-down" aria-hidden="true" ></i>
                </div>
            </header>
);
}

export default Header;