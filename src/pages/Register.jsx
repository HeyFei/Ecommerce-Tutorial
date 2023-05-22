import React from "react"

const Register = () => {
    return (
<section>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Checkout</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Shop</a></li>
                                <li className="breadcrumb-item active">Checkout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-box-main">
                <div className="container">
                    <div className="row new-account-login">
                        <div className="col-sm-6 col-lg-6 mb-3">
                            <div className="title-left">
                                <h3>Create New Account</h3>
                            </div>
                            {/* <h5><a data-toggle="collapse" href="#formRegister" role="button" aria-expanded="false">Click here to Register</a></h5> */}
                            <form className="mt-3 collapse review-form-box show" id="formRegister">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="InputName" className="mb-0">First Name</label>
                                        <input type="text" className="form-control" id="InputName" placeholder="First Name" /> </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="InputLastname" className="mb-0">Last Name</label>
                                        <input type="text" className="form-control" id="InputLastname" placeholder="Last Name" /> </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="InputEmail1" className="mb-0">Email Address</label>
                                        <input type="email" className="form-control" id="InputEmail1" placeholder="Enter Email" /> </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="InputPassword1" className="mb-0">Password</label>
                                        <input type="password" className="form-control" id="InputPassword1" placeholder="Password" /> </div>
                                </div>
                                <button type="submit" className="btn hvr-hover">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;