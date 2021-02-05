import React, { useState } from 'react';
import './Project.css'

const Project = (props) => {
    const [isHover, setIsHover] = useState(false)

    const onHoverHandler = () => {
        setIsHover(true)
    }

    const onLeaveHandler = () => {
        setIsHover(false)
    }

    const openLink = (link) => {
        window.open(link)
    }

    return(
        <div 
            onMouseEnter={onHoverHandler} 
            onMouseLeave={onLeaveHandler} 
            className="project" 
            style={{backgroundImage: `url("${props.gif}")`}}
        >
            {isHover && <div className="hover-text">
                <h2 
                    onClick={() => openLink(props.link)} 
                    className="title-1">{props.title}
                    </h2>
                <h5 
                    className="description">
                    {props.description}
                </h5>
            </div>}
        </div>
    )
}

export default Project;