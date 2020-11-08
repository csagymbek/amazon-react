import React from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "../configs/reducer";
import { useHistory } from "react-router-dom";

export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      {/* price  */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* button  */}
      <button className="subtotal__button" onClick={e => history.push("/payment")}>Proceed to checkout</button>
    </div>
  );
}
