import React from "react";
import './contact.scss'

function Contact() {
    return(
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
    );
}

export default Contact