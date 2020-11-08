import React, { useState, useEffect } from "react";
import "../styles/Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../configs/reducer";
import axios from "../configs/axios";

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios;
    };
    getClientSecret();
    return () => {
      cleanup;
    };
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
  };

  const handleChange = (e) => {
    // listen for changes in the CardElement component
    // Display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      {/* payment sections  */}
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* delivery address  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            {user?.email}
            <p>75 Poncetta Drive Apt 227</p>
            <p>Daly City, CA 94015</p>
          </div>
        </div>
        {/* review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment method  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          {/* stripe  */}
          <div className="payment__details">
            <form action="" onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  prefix={"$"}
                  thousandSeparator={true}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* error  */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
