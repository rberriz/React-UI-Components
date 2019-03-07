import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
                <div className='flexHeader '>
                    <h2 id='schoolName'>Lambda School</h2>
                    <p className='topText'>@LambdaSchool</p>
                    <p className='topText'>  March 7</p>


                </div>
            );
        };
        
    export default HeaderTitle;
