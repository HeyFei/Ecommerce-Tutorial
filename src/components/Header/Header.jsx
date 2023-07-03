import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/images/logo.png";
import proImg01 from "../../assets/images/img-pro-01.jpg";
import proImg02 from "../../assets/images/img-pro-02.jpg";
import proImg03 from "../../assets/images/img-pro-03.jpg";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Shop",
    path: "/products",
  },
  {
    display: "About US",
    path: "/about",
  },
  // {
  //   display: "Gallery",
  //   path: "/gallery",
  // },
  {
    display: "Contact US",
    path: "/contact",
  },
];

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <header className="main-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="index.html"><img src={logo} className="logo" alt="" /></a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
              {/* <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                        <li className="dropdown">
                            <a href="#" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">SHOP</a>
                            <ul className="dropdown-menu">
                                <li><a href="shop.html">Sidebar Shop</a></li>
                                <li><a href="shop-detail.html">Shop Detail</a></li>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="my-account.html">My Account</a></li>
                                <li><a href="wishlist.html">Wishlist</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li>
                        <li className="nav-item"><a className="nav-link" href="contact-us.html">Contact Us</a></li> */}
              {nav__links.map((item, index) => (
                <li className="nav-item" key={index}>
                  <NavLink className="nav-link" to={item.path}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="attr-nav">
            <ul>
              <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
              <li className="side-menu">
                <a href="./cart">
                  <i className="fa fa-shopping-bag"></i>
                  <span className="badge">{totalQuantity}</span>
                  <p>&nbsp;My Cart</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="side">
          <a href="#" className="close-side"><i className="fa fa-times"></i></a>
          <li className="cart-box">
            <ul className="cart-list">
              {cartItems.map((item) => (
                <Li item={item} key={item.id} />
              ))}
              <li className="total">
                <a href="../cart" className="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                <span className="float-right"><strong>Total</strong>: ${totalAmount}</span>
              </li>
            </ul>
          </li>
        </div>
      </nav>
    </header>
  );
};

const Li = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  return (
    <li>
      <a href="#" className="photo"><img src={image01} className="cart-thumb" alt="" /></a>
      <h6><a href="#">{title}</a></h6>
      <p>{quantity}x - <span className="price">${price}</span></p>
    </li>
  );
};

export default Header;
