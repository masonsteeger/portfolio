import React from 'react';

import './Header.css';
import GitHub from '../../media/github.png'
import LinkedIn from '../../media/linkedin.png'

const header = (props) => {
    return(
        <div className='header'>
            <h1 className="name">MASON STEEGER</h1>
            <h3 className="title">SOFTWARE DEVELOPER</h3>
            <div className='icons'>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/masonsteeger'><img className='icon' src={`${GitHub}`} alt='github' /></a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/mason-steeger'><img className='icon' src={`${LinkedIn}`} alt='github' /></a>
            </div>
        </div>
    )
}

export default header;