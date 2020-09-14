import React from 'react';
import "./Product.css";
import { useStateValue } from "../../StateProvider/StateProvider";
import uniqid from 'uniqid';

function Product({title, price, rating, image, id, key}) {
    const [{ basket }, dispatch] = useStateValue();


    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                key: uniqid(),
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=> (
                        <p>⭐️</p>
                    ))}
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
