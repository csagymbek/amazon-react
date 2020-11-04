import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";

export default function Header() {
  const [{basket}] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      {/* logo on the left side of the header  */}
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
          className="header__logo"
        />
      </Link>
      {/* search box  */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* Sign In, Return, Prime  */}
      <div className="header__nav">
        {/* Sign In  */}
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello, username</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/* Returns and Orders  */}
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* Prime membership  */}
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* Basket  */}
        <Link className="header__link" to="/checkout">
          <div className="header__optionBasket">
            {/* Shopping basket icon  */}
            <ShoppingBasketIcon />
            {/* number of items in the basket  */}
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
