import React from 'react';
import './Modal.css';

const modal = (props) => {
    return(
        <div className="modal" style={props.display} onClick={props.clicked}>
            {props.children}
        </div>
    )
}

export default modal;