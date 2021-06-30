import React from "react";
import './modal.scss'

function Modal(props) {
    console.log(props)
    if (props.state===1) {
        return(
        <div className='modal-wrapper'>
            <div className='modal'>
            {props.exit}
                <div className='title'><h2>{props.title}</h2></div>
                <div className='img-wrapper'><img className='img' src={props.img} /></div>
                <div className='desc'><h3>{props.desc}</h3></div>
                <a href={props.site} className='link' target='_blank'>Посмотреть сайт</a>
            <button className='close-button' onClick={props.exit}>close</button>
            </div>
        </div>
    );
    }
    else {
        return(<div></div>);
    }
}

export default Modal;