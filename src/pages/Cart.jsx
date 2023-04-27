import React from "react"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../redux/cart/cartSlice";

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <section>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Cart</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Shop</a></li>
                                <li className="breadcrumb-item active">Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-main table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Images</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <Tr item={item} key={item.id} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-lg-6 col-sm-6">
                            <div className="coupon-box">
                                <div className="input-group input-group-sm">
                                    <input className="form-control" placeholder="Enter your coupon code" aria-label="Coupon code" type="text" />
                                    <div className="input-group-append">
                                        <button className="btn btn-theme" type="button">Apply Coupon</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="update-box">
                                <input value="Update Cart" type="submit" />
                            </div>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-lg-8 col-sm-12"></div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="order-box">
                                <h3>Order summary</h3>
                                <div className="d-flex">
                                    <h4>Sub Total</h4>
                                    <div className="ml-auto font-weight-bold"> $ 130 </div>
                                </div>
                                <div className="d-flex">
                                    <h4>Discount</h4>
                                    <div className="ml-auto font-weight-bold"> $ 40 </div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex">
                                    <h4>Coupon Discount</h4>
                                    <div className="ml-auto font-weight-bold"> $ 10 </div>
                                </div>
                                <div className="d-flex">
                                    <h4>Tax</h4>
                                    <div className="ml-auto font-weight-bold"> $ 2 </div>
                                </div>
                                <div className="d-flex">
                                    <h4>Shipping Cost</h4>
                                    <div className="ml-auto font-weight-bold"> Free </div>
                                </div>
                                <hr />
                                <div className="d-flex gr-total">
                                    <h5>Grand Total</h5>
                                    <div className="ml-auto h5"> $ {totalAmount} </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="col-12 d-flex shopping-box"><a href="checkout.html" className="ml-auto btn hvr-hover">Checkout</a> </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const Tr = (props) => {
    const { id, image01, title, price, quantity } = props.item;
    const dispatch = useDispatch();

    const incrementItem = () => {
        dispatch(
            cartActions.addItem({
                id: id,
                title: title,
                image01: image01,
                price: price,
            })
        );
    };

    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id));
    }

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    };
    return (
        <tr>
            <td className="thumbnail-img">
                <Link to={`/product/${id}`}>
                    <img className="img-fluid" src={image01} alt="" />
                </Link>
            </td>
            <td className="name-pr">
                <Link to={`/product/${id}`}>
                    {title}
                </Link>
            </td>
            <td className="price-pr">
                <p>$ {price}</p>
            </td>
            <td className="quantity-box">
                <span onClick={() => decreaseItem()} style={{ cursor: "pointer" }}>&nbsp;-&nbsp;</span>
                <input style={{ width: "50%" }} type="text" value={quantity || 0} readOnly size="4" min="0" step="1" className="c-input-text qty text" />
                <span onClick={() => incrementItem()} style={{ cursor: "pointer" }}>&nbsp;+&nbsp;</span>
            </td>
            <td className="total-pr">
                <p>$ {Number(quantity) * Number(price)}</p>
            </td>
            <td className="remove-pr">
                <button onClick={() => deleteItem()} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}>
                    <i className="fas fa-times"></i>
                </button>
            </td>
        </tr>
    );
};

export default Cart;