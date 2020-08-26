import React from 'react';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

// navbar page
const Header =(props)=> {
    const {username} = props;
    return (
        <nav className= " header">
        {/*amazon logo*/}
        <Link to="/">
        <img className= "headerlogo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
        {/*search bar*/}
        <div className = "headersearch">
        <input type= "text" className="headersearchInput"/>
        <SearchIcon className="headericon"/>
        </div>

        {/*Register*/}
        <div className="headernav">
        <Link to="/Register" className="headerlink">
        <div className = "headeroption">
        <span className="lineone">Hello {props.username}</span>
        <span className="linetwo">{username? "Registered": "Register"}</span>
        </div>
        </Link>

        {/*signin*/}
        <Link to="/Signin" className="headerlink">
        <div className = "headeroption">
        <span className="lineone">Hello {props.username}</span>
        <span className="linetwo">{username? "Logout": "Signin"}</span>
        </div>
        </Link>

        {/*available products*/}
        <Link to="/Products" className="headerlink">
        <div className = "headeroption">
        <span className="lineone">Available</span>
        <span className="linetwo">Products</span>
        </div>
        </Link>

        {/*Home*/}
        <Link to="/" className="headerlink">
        <div className = "headeroption">
        <span className="lineone">Your</span>
        <span className="linetwo">Home</span>
        </div>
        </Link>
        

        {/*Basket*/}
        <Link to="/cart" className="headerlink">
        <div className = "headerbasket">
        <ShoppingBasketIcon/>
        <span className="basketlineone">0</span>
        </div>
        </Link> 
        </div> 
        </nav>
    )
}
export default Header;