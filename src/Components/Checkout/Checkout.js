import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal/Subtotal';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import { useStateValue } from "../StateProvider/StateProvider";
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    const AnimatedCheckOut = React.forwardRef(({item, index}, ref) => (
        <div ref={ref}>
          <CheckoutProduct
                key={`anim index ${item.id}`}
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
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/PillPack/L_2xDesktop_650x45._CB421946505_.jpg" alt=""/>
                <div>
                    <h3>Hello, {user ? user?.email : 'Guest'}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    <FlipMove
            >
            {basket?.map((item, index) => (
              <AnimatedCheckOut
                key={`an ${item.id}`}
                item={item}
                index={index}
              />
            ))}
          </FlipMove>
                    
                </div>
            </div>
                <div className="check__right">
                    <Subtotal />
                </div>
        </div>
    )
}

export default Checkout;
