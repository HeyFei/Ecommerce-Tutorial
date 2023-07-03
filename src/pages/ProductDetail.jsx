import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { cartActions } from "../redux/cart/cartSlice";
import products from "../assets/fake-data/products";

import bigImg01 from "../assets/images/big-img-01.jpg";
import bigImg02 from "../assets/images/big-img-02.jpg";
import bigImg03 from "../assets/images/big-img-03.jpg";

const ProductDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const product = products.find((product) => product.id === id);
    const { title, original_price, current_price, desc, image01 } = product;

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                image01,
                current_price,
            })
        );
    };

    return (
        <section>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Shop Detail</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Shop</a></li>
                                <li className="breadcrumb-item active">Shop Detail </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shop-detail-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-6">
                            <div id="carousel-example-1" className="single-product-slider carousel slide" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active"> <img className="d-block w-100" src={bigImg01} alt="First slide" /> </div>
                                    <div className="carousel-item"> <img className="d-block w-100" src={bigImg02} alt="Second slide" /> </div>
                                    <div className="carousel-item"> <img className="d-block w-100" src={bigImg03} alt="Third slide" /> </div>
                                </div>
                                <a className="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev">
                                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                    <span className="sr-only">Next</span>
                                </a>
                                <ol className="carousel-indicators">
                                    <li data-target="#carousel-example-1" data-slide-to="0" className="active">
                                        <img className="d-block w-100 img-fluid" src={bigImg01} alt="" />
                                    </li>
                                    <li data-target="#carousel-example-1" data-slide-to="1">
                                        <img className="d-block w-100 img-fluid" src={bigImg02} alt="" />
                                    </li>
                                    <li data-target="#carousel-example-1" data-slide-to="2">
                                        <img className="d-block w-100 img-fluid" src={bigImg03} alt="" />
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-6">
                            <div className="single-product-details">
                                <h2>{title}</h2>
                                <h5> <del>$ {original_price}</del> ${current_price}</h5>
                                {/* <p className="available-stock"><span> More than 20 available / <a href="#">8 sold </a></span><p> */}
                                <h4>Short Description:</h4>
                                <p>{desc}</p>
                                <ul>
                                    <li>
                                        <div className="form-group quantity-box">
                                            <label className="control-label">Quantity</label>
                                            <input className="form-control" min="0" max="20" type="number" />
                                        </div>
                                    </li>
                                </ul>

                                <div className="price-box-bar">
                                    <div className="cart-and-bay-btn">
                                        <button className="btn hvr-hover" style={{ color: "#FFFFFF", fontWeight: 700, padding: "10px 20px", border: "none" }}>Buy New</button>&nbsp;
                                        <button onClick={() => addToCart()} className="btn hvr-hover" style={{ color: "#FFFFFF", fontWeight: 700, padding: "10px 20px", border: "none" }}>Add to Cart</button>
                                    </div>
                                </div>

                                <div className="add-to-btn">
                                    <div className="add-comp">
                                        <button className="btn hvr-hover" style={{ color: "#FFFFFF", fontWeight: 700, padding: "10px 20px", marginBottom: "30px", border: "none" }}><i className="fas fa-heart"></i> Add to wishlist</button>&nbsp;
                                        <button className="btn hvr-hover" style={{ color: "#FFFFFF", fontWeight: 700, padding: "10px 20px", marginBottom: "30px", border: "none" }}><i className="fas fa-sync-alt"></i> Add to Compare</button>
                                    </div>
                                    <div className="share-bar">
                                        <button className="btn hvr-hover" style={{ color: "#FFFFFF", padding: "5px 10px", display: "inline-block", width: "34px" }}><i className="fab fa-facebook" aria-hidden="true"></i></button>&nbsp;
                                        <button className="btn hvr-hover" style={{ color: "#FFFFFF", padding: "5px 10px", display: "inline-block", width: "34px" }}><i className="fab fa-google-plus" aria-hidden="true"></i></button>&nbsp;
                                        <button className="btn hvr-hover" style={{ color: "#FFFFFF", padding: "5px 10px", display: "inline-block", width: "34px" }}><i className="fab fa-twitter" aria-hidden="true"></i></button>&nbsp;
                                        <button className="btn hvr-hover" style={{ color: "#FFFFFF", padding: "5px 10px", display: "inline-block", width: "34px" }}><i className="fab fa-pinterest-p" aria-hidden="true"></i></button>&nbsp;
                                        <button className="btn hvr-hover" style={{ color: "#FFFFFF", padding: "5px 10px", display: "inline-block", width: "34px" }}><i className="fab fa-whatsapp" aria-hidden="true"></i></button>&nbsp;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="card card-outline-secondary my-4">
                            <div className="card-header">
                                <h2>Product Reviews</h2>
                            </div>
                            <div className="card-body">
                                <div className="media mb-3">
                                    <div className="mr-2">
                                        <img className="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image" />
                                    </div>
                                    <div className="media-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                        <small className="text-muted">Posted by Anonymous on 3/1/18</small>
                                    </div>
                                </div>
                                <hr />
                                <div className="media mb-3">
                                    <div className="mr-2">
                                        <img className="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image" />
                                    </div>
                                    <div className="media-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                        <small className="text-muted">Posted by Anonymous on 3/1/18</small>
                                    </div>
                                </div>
                                <hr />
                                <div className="media mb-3">
                                    <div className="mr-2">
                                        <img className="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image" />
                                    </div>
                                    <div className="media-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                        <small className="text-muted">Posted by Anonymous on 3/1/18</small>
                                    </div>
                                </div>
                                <hr />
                                <button className="btn hvr-hover" style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 18, padding: "12px 25px", border: "none" }}>Leave a Review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;