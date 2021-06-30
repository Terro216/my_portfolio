import React, {useState} from "react";
import ReactDOM from "react-dom";
import './app.scss'
import Modal from './modal.js'
import dreamer from './files/dreamer.jpg';
import m from './files/mariam.png';
import cinema from './files/cinema.png';
import diary from './files/diary.png';
import drum from './files/drum.png';
import quotes from './files/quotes.png';
import ren from './files/ren.png'

function App() {

    const [modalState, changeState] = useState({
        state:0,
        modalImg: cinema,
        modalTitle: '',
        modalDesc:'',
        modalSite:'',
        modalSrc:''
    });

    function toggleModal(img,title,desc,site,src) {
        (modalState.state===0)?changeState({state:1,modalTitle:title,modalImg:img,modalDesc:desc,modalSite:site,modalSrc:src}):changeState({state:0});
    }

    return(
        <div className='app-wrapper'>
        <Modal exit={toggleModal} state={modalState.state} img={modalState.modalImg} title={modalState.modalTitle} desc={modalState.modalDesc} site={modalState.modalSite} src={modalState.modalSrc} />
            <header className='welcome'>
                <div className='welcome-text'>
                    <h1>Привет!</h1><br></br>
                    <h3>Меня зовут Илья, это мой сайт и еще не придумал что сюда написать</h3>
                    
                </div>

                <div className='welcome-img'>
                <figure>
                    <img className='me' src={dreamer}>
                    </img>
                    <p></p>
                    <figcaption>Это я. с фото еще не определился.</figcaption>
                </figure>
                </div>
            </header>

            <br></br><hr></hr><br></br>

            <div className='instruments-wrapper'>
                <h1>Мои инструменты:</h1>
                <p></p>
                <div className='instruments'>
                <div className='instrument'>
                    <img className='instrument-icon' src='https://d33wubrfki0l68.cloudfront.net/b7a3519cee0d2bc479bb464f660eec617e0f4c8d/36fbf/images/skills/html-5.png'></img>
                    <span>HTML5</span>
                </div>
                <div className='instrument'>
                    <img className='instrument-icon' src='https://d33wubrfki0l68.cloudfront.net/552837875098361e26eb2c8b45d7c8606bbc6eef/7a07f/images/skills/css-3.png'></img>
                    <span>CSS3</span>
                </div>
                <div className='instrument'>
                    <img className='instrument-icon' src='https://d33wubrfki0l68.cloudfront.net/1e21457b66ca6dcf6693b99b5a77dae00598bf97/537ad/images/skills/javascript.png'></img>
                    <span>JavaScript</span>
                </div>
                <div className='instrument'>
                    <img className='instrument-icon' src='https://d33wubrfki0l68.cloudfront.net/1fcb5f886d3be4d1678e4136f961f0048c0072d0/70143/images/skills/react.png'></img>
                    <span>React</span>
                </div>
                <div className='instrument'>
                    <img className='instrument-icon' src='https://d33wubrfki0l68.cloudfront.net/be5b496d6ee0c8cbfe62bef8072ce21a09ce91c5/75d12/images/skills/sass.png'></img>
                    <span>SCSS</span>
                </div>
                <div className='instrument'>
                    <img className='instrument-icon' src='https://d33wubrfki0l68.cloudfront.net/46ff7544504aa7a24b70ab75ec21fbac8ff28349/212e6/images/skills/git.png'></img>
                    <span>Git</span>
                </div>
                <div className='instrument'>
                    <img className='instrument-icon' src='https://d33wubrfki0l68.cloudfront.net/f64467107a11c7dec0ce0c8f6f93605ba2f619ca/bbffc/images/skills/github.png'></img>
                    <span>Github</span>
                </div>
                <div className='instrument'>
                    <img className='instrument-icon' src='https://d33wubrfki0l68.cloudfront.net/15ce9994b3a8c6a0a89d45046ab1767e2b2d3e3c/86104/images/skills/node-js.png'></img>
                    <span>Node JS</span>
                </div>
                <div className='instrument'>
                    <img className='instrument-icon' src='https://d33wubrfki0l68.cloudfront.net/eaa9997b4f8907c3b9512afd89b1c8e5911445d5/18284/images/skills/npm.png'></img>
                    <span>NPM</span>
                </div>
                <div className='instrument'>
                    <img className='instrument-icon' src='https://d33wubrfki0l68.cloudfront.net/a3372e1ec29fd8d55a49e46c836b9322656a7e5e/840c8/images/skills/bootstrap.png'></img>
                    <span>Bootstrap</span>
                </div>
                <div className='instrument'>
                    <img className='instrument-icon' src='https://d33wubrfki0l68.cloudfront.net/b95fb3402c80598a5bb3e05f348f945653a32ea4/a489f/images/skills/photoshop.png'></img>
                    <span>Photoshop</span>
                </div>
                <div className='instrument'>
                    <img className='instrument-icon' src='https://d33wubrfki0l68.cloudfront.net/c3ccb6f2496bab0dc8047e5d1ddd20ae1fb3dc67/aae43/images/skills/api.webp'></img>
                    <span>API</span>
                </div>
                <div className='instrument'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M13.275 15.88h5.417c1.508 0 2.712-1.241 2.712-2.756v-5.164c0-1.47-1.24-2.574-2.712-2.819-0.932-0.155-1.898-0.226-2.825-0.221s-1.813 0.083-2.592 0.221c-2.295 0.405-2.712 1.254-2.712 2.819v2.067h5.423v0.689h-7.459c-1.576 0-2.956 0.947-3.388 2.75-0.498 2.066-0.52 3.355 0 5.512 0.385 1.606 1.306 2.75 2.882 2.75h1.865v-2.478c0-1.79 1.549-3.369 3.388-3.369zM12.933 8.649c-0.562 0-1.018-0.461-1.018-1.030 0-0.572 0.455-1.037 1.018-1.037 0.56 0 1.018 0.465 1.018 1.037 0 0.57-0.457 1.030-1.018 1.030zM26.826 13.465c-0.389-1.569-1.133-2.75-2.712-2.75h-2.035v2.408c0 1.867-1.583 3.439-3.388 3.439h-5.417c-1.484 0-2.712 1.27-2.712 2.756v5.164c0 1.47 1.278 2.334 2.712 2.756 1.717 0.505 3.363 0.596 5.417 0 1.365-0.395 2.712-1.191 2.712-2.756v-2.067h-5.417v-0.689h8.129c1.576 0 2.163-1.099 2.712-2.75 0.566-1.699 0.542-3.332 0-5.512zM19.033 23.794c0.562 0 1.018 0.461 1.018 1.030 0 0.572-0.456 1.037-1.018 1.037-0.56 0-1.018-0.465-1.018-1.037 0-0.57 0.457-1.030 1.018-1.030z"></path></svg>
                    <span>Python</span>
                </div>
                </div>
            </div>

            <br></br><hr></hr><br></br>

            <main className='portf'>
                <h1>Мои работы:</h1>
                <div className='cards'>

                    <div className='card' onClick={()=>{toggleModal(cinema,'Онлайн кинотеатр','Онлайн кинотеатр на реакте с использованием react-routing и api кинопоиска','https://terro216.github.io/cinema-react','https://github.com/Terro216/cinema-react')}}>
                        <div className='card-img-wrapper'>
                        <img className='card-img' src={cinema}></img>
                        </div>
                    </div>

                    <div className='card' onClick={()=>{toggleModal(m,'Сайт менеджера по туризму','Одностраничный лендинг с функцией отправки мейлов с помощью php, верстал на HTML/CSS/Bootstrap. Один из первых сайтов.','http://mariamedtours.ru/',0)}}>
                        <div className='card-img-wrapper'>
                        <img className='card-img' src={m}></img>
                        </div>
                    </div>

                    <div className='card' onClick={()=>{toggleModal(drum,'Drum Pad','Можно играть разные мелодии, нажимая на клавиши клавиатуры (или кнопки на экране). Реализовано возможность выключения и переключения инструментов.','https://terro216.github.io/fcc-portfolio/js/drum_machine/dist/index.html','https://github.com/Terro216/fcc-portfolio/tree/main/js/drum_machine/src')}}>
                        <div className='card-img-wrapper'>
                        <img className='card-img' src={drum}></img>
                        </div>
                    </div>

                    <div className='card' onClick={()=>{toggleModal(ren,'Редактор Текста','Markdown редактор с видом результата при изменении','https://terro216.github.io/fcc-portfolio/js/react-markdown/dist/index.html','https://github.com/Terro216/fcc-portfolio/tree/main/js/react-markdown/src')}}>
                        <div className='card-img-wrapper'>
                        <img className='card-img' src={ren}></img>
                        </div>
                    </div>

                    <div className='card' onClick={()=>{toggleModal(quotes,'Цитаты известных людей','Небольшое приложение, показывающее разные цитаты по нажатию кнопки. Есть возможность поделиться в соц. сетях','https://terro216.github.io/fcc-portfolio/js/random_quote/dist/index.html','https://github.com/Terro216/fcc-portfolio/tree/main/js/random_quote/src')}}>
                        <div className='card-img-wrapper'>
                        <img className='card-img' src={quotes}></img>
                        </div>
                    </div>

                    <div className='card' onClick={()=>{toggleModal(diary,'Дневник','Чистая вёрстка по макету за сутки в марафоне',0,'https://github.com/Terro216/diary-project')}}>
                        <div className='card-img-wrapper'>
                        <img className='card-img' src={diary}></img>
                        </div>
                    </div>

                </div>
            </main>

            <br></br><hr></hr><br></br>

            <div className='contact'>
                <h1>Я в социальных сетях:</h1>
                <a className='contact-mail' href='mailto:0ilya@bk.ru' onClick={() => {
                    navigator.clipboard.writeText('0ilya@bk.ru');document.getElementsByClassName('contact-mail')[0].innerHTML='Адрес скопирован'
                    }}>
                        Написать на почту</a>

                <div className='contact-buttons'>
                <div className='contact-button'>
                    <a href="https://vk.com/ilya_med" target='_blank' className="fab fa-vk fa-2x"></a>
                </div>
                <div className='contact-button'>
                    <a href="https://github.com/Terro216" target='_blank' className="fab fa-github fa-2x"></a>
                </div>
                <div className='contact-button'>
                    <a href="https://www.instagram.com/ilyamed216/" target='_blank' className="fab fa-instagram fa-2x"></a>
                </div>
                </div>
            </div>
            
            <br></br><hr></hr><br></br>
        </div>
    );
}

//export default App
ReactDOM.render(<App />, document.getElementById('root'));