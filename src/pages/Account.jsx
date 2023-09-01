import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/auth/authSlice";

const Account = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authUser = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!authUser) navigate('/login');
    }, [authUser]);

    const Logout = () => {
        dispatch(logout())
    }

    return (
        <section>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Account</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-account-box-main">
                <div className="container">
                    <div className="my-account-page">
                        <div className="row">

                            <div className="col-lg-4 col-md-12">
                                <div className="account-box">
                                    <div className="service-box">
                                        <div className="service-icon">
                                            <Link to=''><i className="fa fa-lock"></i> </Link>
                                        </div>
                                        <div className="service-desc">
                                            <h4>Login &amp; security</h4>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="account-box">
                                    <div className="service-box">
                                        <div className="service-icon">
                                            <Link to=''> <i className="fa fa-history"></i> </Link>
                                        </div>
                                        <div className="service-desc">
                                            <h4>Your Orders</h4>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="account-box">
                                    <div className="service-box">
                                        <div className="service-icon">
                                            <Link to='../favourites'> <i className="fa fa-gift"></i> </Link>
                                        </div>
                                        <div className="service-desc">
                                            <h4>Your Favourites</h4>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="account-box">
                                    <div className="service-box">
                                        <div className="service-icon">
                                            <Link to=''> <i className="fa fa-location-arrow"></i> </Link>
                                        </div>
                                        <div className="service-desc">
                                            <h4>Your Addresses</h4>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="account-box">
                                    <div className="service-box">
                                        <div className="service-icon">
                                            <Link to=''> <i className="fa fa-credit-card"></i> </Link>
                                        </div>
                                        <div className="service-desc">
                                            <h4>Payment options</h4>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="account-box">
                                    <div className="service-box">
                                        <div className="service-icon">
                                            <Link to='' onClick={() => Logout()}> <i className="fa fa-sign-out-alt"></i>
                                            </Link>
                                        </div>
                                        <div className="service-desc">
                                            <h4 onClick={() => Logout()}>Logout</h4>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Account;