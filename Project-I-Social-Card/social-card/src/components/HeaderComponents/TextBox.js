import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const TextBox = props => {
    return (
        <div>
            <HeaderTitle />
            <HeaderContent />
        </div>
    )
}
export default TextBox;
