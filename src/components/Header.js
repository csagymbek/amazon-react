import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Header() {
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
        <Link>
          <div className="header__option">
            <span>Hello, username</span>
            <span>Sign In</span>
          </div>
        </Link>
      </div>
      {/* Basket  */}
    </nav>
  );
}
