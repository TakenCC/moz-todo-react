import React from 'react';
import { IconVanilla } from './IconVanilla';
import './CardItem.css';

function CardItem() {
    return (
        <div className='Icon-Menu'>
            <IconVanilla type="delete" color='red'/>
        </div>
    );
}

export { CardItem }