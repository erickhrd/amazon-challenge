import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import Payment from './Components/Payment/Payment';
import Orders from './Components/Orders/Orders';
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './Firebase';
import { useStateValue } from "./Components/StateProvider/StateProvider";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';



const promise = loadStripe ('pk_test_99XEUmIVMUFM0xwph3Cw3TL9');

function App() {
  const [{}, dispatch] = useStateValue();

  
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    
  //let sideDrawer = <SideDrawer/>
  //let backdrop= <Backdrop />


  const drawerToggleClickHandler = () => {
   setSideDrawerOpen(!sideDrawerOpen)
   console.log('Opening Menu Button Works')
  }

  const backDrawerToggleClickHandler = () => {
    setSideDrawerOpen(false)
    console.log('Closing Menu Button Works')
   }

   const showSideDrawer = () => {
     
   }

   

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser);


      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
      <div style={{height:'100%'}}>
        <Switch>
        <Route path="/orders">
           <Header  click={drawerToggleClickHandler} />
           <SideDrawer show={ sideDrawerOpen ? ( 
          <Backdrop click={backDrawerToggleClickHandler} /> ) : null } />
          { sideDrawerOpen ? ( 
          <Backdrop click={backDrawerToggleClickHandler} /> ) : null }
           <Orders />
           <Footer/>
          </Route>
        <Route path="/login">
           <Login />
          </Route>
          <Route path="/checkout">
            <Header click={drawerToggleClickHandler} />
            <SideDrawer show={ sideDrawerOpen ? ( 
          <Backdrop click={backDrawerToggleClickHandler} /> ) : null } />
          { sideDrawerOpen ? ( 
          <Backdrop click={backDrawerToggleClickHandler} /> ) : null }
            <Checkout />
            <Footer/>
          </Route>
          <Route path="/payment">
            <Header  click={drawerToggleClickHandler} />
            <SideDrawer show={ sideDrawerOpen ? ( 
          <Backdrop click={backDrawerToggleClickHandler} /> ) : null } />
          { sideDrawerOpen ? ( 
          <Backdrop click={backDrawerToggleClickHandler} /> ) : null }
            <Elements stripe = {promise}>
              <Payment />
            </Elements>
            <Footer/>
          </Route>
          <Route path="/">
            <Header click={drawerToggleClickHandler} />
            <SideDrawer show={ sideDrawerOpen ? ( 
          <Backdrop click={backDrawerToggleClickHandler} /> ) : null } />
          { sideDrawerOpen ? ( 
          <Backdrop click={backDrawerToggleClickHandler} /> ) : null }
            <Home/>
            <Footer/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
