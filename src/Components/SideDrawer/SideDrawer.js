import React from 'react';
import './SideDrawer.css';
import { useStateValue } from "../StateProvider/StateProvider";
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import ReactCountryFlag from "react-country-flag";
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase';

const SideDrawer = ({show}) => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    let drawerClasses = 'side-drawer';
    if (show) {
        drawerClasses=['side-drawer open']
        console.log('Animation works')
    }

    return (
        <nav className={drawerClasses}>
            <h3><PersonIcon className="icon" style={{fontSize:'30px'}}/>Hello, {user ? user?.email : 'Guest'}</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/orders">Orders</a></li>
                    <li><a href="/checkout">Cart</a></li>
                    <li><a href="/">Your Recommendations</a></li>
                    <li><a href="/">Customer Service</a></li>
                </ul>
                <h4><SettingsIcon className="icon" style={{fontSize:'25px'}}/>Settings</h4>
                <ul>
                    <li><a href="/">🌐English</a></li>
                    <li className="bottom"><a href="/">   <ReactCountryFlag
                countryCode="US"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="US"
            /> United States</a></li>
                </ul>
                <Link  className="btn" to="/login">
                     <button className="login__signInButton" onClick={handleAuthentication}>{user ? 'Sign Out' : 'Sign In'}</button>
                 </Link>
            
                <Link className="btn" to="/login">
                {user ? null : <button className="login__registerButton">Create your Amazon Account</button>}
                 </Link>
         </nav>
    );
};

export default SideDrawer;