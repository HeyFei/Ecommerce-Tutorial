import React, {useState, useEffect} from "react";
import {NavLink, Link, useLocation} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import logo from "../../assets/images/logo.png";


const nav__links = [
    {
        id: 1,
        display: "Home",
        path: "/",
    },
    {
        id: 2,
        display: "Shop",
        path: "/products",
    },
    {
        id: 3,
        display: "About US",
        path: "/about",
    },
    {
        id: 4,
        display: "Contact US",
        path: "/contact",
    },
];

const Header = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    const user = useSelector((state) => state.auth.user);

    const [activeId, setActiveId] = useState(1);

    return (
        <section>
            <div className="main-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="login-box our-link">
                                <ul>
                                    <li><Link to={user ? './account' : './login'}><i
                                        className="fa fa-user s_color"></i> {user ? 'My Account' : 'Login'}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className="main-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                    <div className="container">
                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="index.html"><img src={logo} className="logo" alt=""/></a>
                        </div>

                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                                {nav__links.map((item, index) => (
                                    <li onClick={() => setActiveId(item.id)}
                                        className={activeId === item.id ? "nav-item active" : "nav-item"} key={index}>
                                        <NavLink className="nav-link" to={item.path}>{item.display}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="attr-nav">
                            <ul>
                                <li className="side-menu">
                                    <Link to="./cart">
                                        <i className="fa fa-shopping-bag"></i>
                                        <span className="badge">{totalQuantity}</span>
                                        <p>&nbsp;My Cart</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </section>
    );
};

export default Header;
