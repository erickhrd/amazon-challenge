import React from 'react';
import './DrawerToggleButton.css';


const drawerToggleButton = ({handleClick}) => (
    <button className="toggle-button" onClick={handleClick} >
        <div className="toggle-button_line"/>
        <div className="toggle-button_line"/>
        <div className="toggle-button_line"/>
    </button>
);

export default drawerToggleButton;