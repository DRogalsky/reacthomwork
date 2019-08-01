import React from 'react'
import "./style.css"

export default function Navbar(props) {
    return (
        <nav>
            <ul>
                <li className='title'>Memory Game!</li>
                <li className='instructions'>Click an image to begin</li>
                <li className='score'>Score: {props.score} Top Score: {props.topScore}</li>
            </ul>
        </nav>
    )
}
