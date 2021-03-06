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

    const maxLength = 95;
    return (
        <div className="product">
            <div className="product__info">
                <p>{title.length > maxLength ? `${title.substring(0, maxLength)}...` : title}</p>
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
            <button className="add__basket" onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
