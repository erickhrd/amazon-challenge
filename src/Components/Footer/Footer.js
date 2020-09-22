import React from 'react'
import './Footer.css';
import Grid from '@material-ui/core/Grid';

function Footer() {
    return (
    <Grid container className="footer__container">
        <Grid item xs={12}>
            <footer>
                    <ul className="copyright">
                        <li>&copy; Copyright 2020 <a href="https://ericksportfolio.com/">Erick Hernandez</a></li>
                    </ul>
            </footer>
        </Grid>
    </Grid>
    )
}

export default Footer;
