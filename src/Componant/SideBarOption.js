import React from 'react';
import '../App.css';

function SideBarOption({icon, text, active}) {
    return (
        <div className={`sideBarOptions`}>
            <span>{icon}</span>
            <h2>{text}</h2>
        </div>
    )
}

export default SideBarOption;
