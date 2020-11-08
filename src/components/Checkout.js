import React from "react";
import { useStateValue } from "./StateProvider";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

export default function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Amazon Cart is empty.</h2>
            <p>
              Your Shopping Cart lives to serve. Give it purpose — fill it with
              groceries, clothing, household supplies, electronics, and more.
              Continue shopping on the Amazon.com homepage, learn about today's
              deals, or visit your Wish List.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Shopping Cart</h2>
            {/* list of all checkout products  */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}
