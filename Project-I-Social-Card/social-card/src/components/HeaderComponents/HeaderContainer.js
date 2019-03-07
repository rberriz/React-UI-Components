import React from 'react';
import './Header.css';
import TextBox from './TextBox';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = props => {
    return (
        <div className = 'flexHeader'>
            <ImageThumbnail />
            <TextBox />
        </div>
    )
};
export default HeaderContainer;

