import React, { useState, useEffect } from 'react';
import './Payment.css';
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct';
import { useStateValue } from "../StateProvider/StateProvider";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import { Link, useHistory } from 'react-router-dom';
import FlipMove from 'react-flip-move';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from '../../axios';
import { db } from '../../Firebase';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //stripe secret

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currency in subunits dollars=cents
                url: `/payments/create?total=${getBasketTotal(basket)* 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type:'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }

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
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                 <div className="payment__section">
                 <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                      <FlipMove>
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
                {/*Payment Section*/}
                 <div className="payment__section">
                 <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                <div className="payment__details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment__priceContainer">
                        <CurrencyFormat
                                renderText={(value) => (
                                   <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {/*Errors*/}
                                {error && <div>{error}</div>}
                    </form>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Payment;
