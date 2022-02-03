import React from 'react';

type Props = {
    title : string ,
    isActive : boolean ,
    onClick : any
}
function NavButton({title , onClick , isActive} : Props) {
    return (
        <div onClick={onClick} className={`nav-button ${isActive ? 'active' : ''}`}>
            {title}
        </div>
    );
}

export default NavButton;