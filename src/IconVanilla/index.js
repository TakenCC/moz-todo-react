import React from 'react';
import { ReactComponent as DeleteSVG } from './icons/svg/delete.svg'
import { ReactComponent as EditSVG } from './icons/svg/edit.svg'
import { ReactComponent as AddSVG } from './icons/svg/add.svg'

function IconVanilla({ type, color, onClick }) {
    const icons = {
        "delete": color => (<DeleteSVG className='Icon-item Icon-svg Icon-svg--delete' fill={color} />),
        "edit": color => (<EditSVG className='Icon-item Icon-svg Icon-svg--edit' fill={color} />),
        "add": color => (<AddSVG className='Icon-item Icon-svg Icon-svg--add' fill={color} />)
    };

    return (
        <span className={`Icon-Container Icon-Container--${type}`} onClick={onClick}>
            {icons[type](color)}
        </span>
    );
}

export { IconVanilla }