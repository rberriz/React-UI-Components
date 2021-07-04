import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div id='flexContent'>
            <h3 id='cardTitle'>Get Started With React</h3>
            <p className='cardText'>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p className='cardText grey'>reactjs.org</p>
        </div>
    )
}
export default CardContent;