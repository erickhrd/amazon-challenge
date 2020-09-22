import React, { forwardRef } from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal/Subtotal';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import { useStateValue } from "../StateProvider/StateProvider";
import FlipMove from 'react-flip-move';
import Grid from '@material-ui/core/Grid';



function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    
    const AnimatedCheckOut = forwardRef(({item, index}, ref) => (
        <div ref={ref}>
          <CheckoutProduct
                listKey={item.key}
                title={item.title}
                id={item.id}
                rating={item.rating}
                price={item.price}
                image={item.image}
              />
        </div>
      ));
      
    return (
        <div className="checkout">
            <div className="checkout__left">
              <Grid container>
                <Grid item xs={12} sm={7} md={8}>
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/PillPack/L_2xDesktop_650x45._CB421946505_.jpg" alt=""/>
                <div>
                    <h3>Hello, {user ? user?.email : 'Guest'}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    <FlipMove>
            {basket?.map((item, index) => (
              <AnimatedCheckOut
                key={item.key} 
                item={item}
                index={index}
              />
            ))}
          </FlipMove>
                    
                </div>
                </Grid>
                <Grid item xs={12} sm={5} md={4}>
                  <div className="check__right">
                      <Subtotal />
                  </div>
                </Grid>
              </Grid>
            </div>
        </div>
    )
}

export default Checkout;
