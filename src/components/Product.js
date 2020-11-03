import React from "react";
import "../styles/Product.css";

export default function Product({ id, title, price, rating, image }) {
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
      <button>Add to basket</button>
    </div>
  );
}
