import React from "react";
import {NavLink, Link} from "react-router-dom";

import Img01 from "../assets/images/img-pro-01.jpg";
import Img02 from "../assets/images/img-pro-02.jpg";
import Img03 from "../assets/images/img-pro-03.jpg";

const Account = () => {
    return (
        <section>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Favourites</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wishlist-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-main table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Images</th>
                                        <th>Product Name</th>
                                        <th>Unit Price</th>
                                        <th>Stock</th>
                                        <th>Add Item</th>
                                        <th>Remove</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="thumbnail-img">
                                            <a href="#">
                                                <img className="img-fluid" src={Img01} alt=""/>
                                            </a>
                                        </td>
                                        <td className="name-pr">
                                            <a href="#">
                                                Lorem ipsum dolor sit amet
                                            </a>
                                        </td>
                                        <td className="price-pr">
                                            <p>$ 80.0</p>
                                        </td>
                                        <td className="quantity-box">In Stock</td>
                                        <td className="add-pr">
                                            <button onClick={() => addToCart()} className="btn hvr-hover" style={{
                                                color: "#FFFFFF",
                                                fontWeight: 700,
                                                padding: "10px 20px",
                                                border: "none"
                                            }}>Add to Cart
                                            </button>
                                        </td>
                                        <td className="remove-pr">
                                            <button onClick={() => deleteItem()} style={{
                                                backgroundColor: "transparent",
                                                border: "none",
                                                cursor: "pointer"
                                            }}>
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Account;