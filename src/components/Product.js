import React from "react";
import "../styles/Product.css";
import {useStateValue} from "./StateProvider";

export default function Product({ id, title, price, rating, image }) {
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {id, title, image, price, rating}
    });
  }

  return (
    <div className="product">
      {/* div container  */}
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill(null)
            .map((rate) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      {/* image  */}
      <img src={image} alt={title} />
      {/* button  */}
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}
