import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import Clear from './Clear';
import Zero from './Zero';

const Buttons = props => {
    return (
        <div id='buttonBox'>
            <Clear text='Clear'/>
            <ActionButton text='&divide;' />
            <NumberButton text='7' />
            <NumberButton text='8' />
            <NumberButton text='9' />
            <ActionButton text='X' />
            <NumberButton text='4' />
            <NumberButton text='5' />
            <NumberButton text='6' />
            <ActionButton text='-' />
            <NumberButton text='1' />
            <NumberButton text='2' />
            <NumberButton text='3' />
            <ActionButton text='+' />
            <Zero text='0' />
            <ActionButton text='=' />
        </div>
    )
}

export default Buttons;
