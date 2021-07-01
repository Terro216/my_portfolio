import React from "react";
import './instruments.scss'

function Instruments() {
    return(
        <div className='instruments-wrapper'>
        <h1>Мои инструменты:</h1>
        <p></p>
        <div className='instruments'>
            <div className='instrument'>
                <i className='instrument-icon' class="fab fa-html5 fa-2x " style={{color:'#F16529'}}></i>
                <span>HTML5</span>
            </div>
            <div className='instrument'>
                <i class="fab fa-css3-alt fa-2x" style={{color:'#66D3FA'}}></i>
                <span>CSS3</span>
            </div>
            <div className='instrument'>
                <i class="fab fa-js-square fa-2x" style={{color:'#F0DB4F'}}></i>
                <span>JavaScript</span>
            </div>
            <div className='instrument'>
                <i class="fab fa-react fa-2x" style={{color:'#61DBFB'}}></i>
                <span>React</span>
            </div>
            <div className='instrument'>
                <i class="fab fa-sass fa-2x" style={{color:'#CD6799'}}></i>
                <span>SCSS</span>
            </div>
            <div className='instrument'>
                <i class="fab fa-git-alt fa-2x" style={{color:'#F1502F'}}></i>
                <span>Git</span>
            </div>
            <div className='instrument'>
                <i class="fab fa-github fa-2x github"></i>
                <span>Github</span>
            </div>
            <div className='instrument'>
                <i class="fab fa-node-js fa-2x" style={{color:'#68A063'}}></i>
                <span>Node JS</span>
            </div>
            <div className='instrument'>
                <i class="fab fa-npm fa-2x" style={{color:'#CC3534'}}></i>
                <span>NPM</span>
            </div>
            <div className='instrument'>
                <i class="fab fa-bootstrap fa-2x" style={{color:'#602C50'}}></i>
                <span>Bootstrap</span>
            </div>
            <div className='instrument'>
                <i class="fas fa-file-image fa-2x" style={{color:'#8BC3FC'}}></i>
                <span>Photoshop</span>
            </div>
            <div className='instrument'>
                <i class="fas fa-link fa-2x" style={{color:'#FD7622'}}></i>
                <span>API</span>
            </div>
            <div className='instrument'>
                <i class="fab fa-python fa-2x python"></i>
                <span>Python</span>
            </div>
        </div>
    </div>
    );
}

export default Instruments