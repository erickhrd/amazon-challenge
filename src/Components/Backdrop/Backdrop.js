import React from 'react';
import './Backdrop.css';
import CloseIcon from '@material-ui/icons/Close';


function Backdrop({click}) {
    return (
        <div className="backdrop">
            <button className="close__menu" onClick={click}>
                <CloseIcon className="close__menu-icon" style={{fontSize:"33px"}}/>
            </button>
        </div>
    )
}

export default Backdrop;
