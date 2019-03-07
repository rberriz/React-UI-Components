import React from 'react';
import './Button.css';

const Clear = props => {
    return (
        <div>
            <button className='clear'>{props.text}</button>
        </div>
    )
};
export default Clear;