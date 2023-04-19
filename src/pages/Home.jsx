import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../assets/fake-data/products";
import slideImg01 from "../assets/images/banner-01.jpg";
import slideImg02 from "../assets/images/banner-02.jpg";
import slideImg03 from "../assets/images/banner-03.jpg";

import categoryImg01 from "../assets/images/categories_img_01.jpg";
import categoryImg02 from "../assets/images/categories_img_02.jpg";
import categoryImg03 from "../assets/images/categories_img_03.jpg";

import addImg01 from "../assets/images/add-img-01.jpg";
import addImg02 from "../assets/images/add-img-02.jpg";

import blogImg01  from "../assets/images/blog-img-01.jpg";
import blogImg02  from "../assets/images/blog-img-02.jpg";
import blogImg03  from "../assets/images/blog-img-03.jpg";

import insImg01  from "../assets/images/instagram-img-01.jpg";
import insImg02  from "../assets/images/instagram-img-02.jpg";
import insImg03  from "../assets/images/instagram-img-03.jpg";
import insImg04  from "../assets/images/instagram-img-04.jpg";
import insImg05  from "../assets/images/instagram-img-05.jpg";
import insImg06  from "../assets/images/instagram-img-06.jpg";
import insImg07  from "../assets/images/instagram-img-07.jpg";
import insImg08  from "../assets/images/instagram-img-08.jpg";
import insImg09  from "../assets/images/instagram-img-09.jpg";

const slideImgData = [
    {
      title: "Quick Delivery",
      imgUrl: slideImg01,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    }
    // {
    //   title: "Super Dine In",
    //   imgUrl: slideImg02,
    //   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    // },
    // {
    //   title: "Easy Pick Up",
    //   imgUrl: slideImg03,
    //   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    // },
  ];

const Home = () => {
    const [category, setCategory] = useState("All");
    const [allProducts, setAllProducts] = useState(products);

    useEffect(() => {
        if (category == "All") {
            setAllProducts(products);
        }
        if (category == "Top featured") {
            const filterProducts = products.filter(
                (item) => item.category == "Top featured"
            );
            setAllProducts(filterProducts);
        }
        if (category == "Best seller") {
            const filterProducts = products.filter(
                (item) => item.category == "Best seller"
            );
            setAllProducts(filterProducts);
        }
    },[category]);

    return (
        <section>
            <div className="top-search">
                <div className="container">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-search"></i></span>
                        <input type="text" className="form-control" placeholder="Search"/>
                        <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                    </div>
                </div>
            </div>
            <div className="categories-shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="shop-cat-box">
                                <img className="img-fluid" src={categoryImg01} alt="" />
                                <a className="btn hvr-hover" href="#">Lorem ipsum dolor</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="shop-cat-box">
                                <img className="img-fluid" src={categoryImg02} alt="" />
                                <a className="btn hvr-hover" href="#">Lorem ipsum dolor</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="shop-cat-box">
                                <img className="img-fluid" src={categoryImg03} alt="" />
                                <a className="btn hvr-hover" href="#">Lorem ipsum dolor</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="box-add-products">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="offer-box-products">
                                <img className="img-fluid" src={addImg01} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="offer-box-products">
                                <img className="img-fluid" src={addImg02} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="products-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>Fruits & Vegetables</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="special-menu text-center">
                                <div className="button-group filter-button-group">
                                    <button 
                                        className={category === 'All' ? 'active' : ''}
                                    onClick={() => setCategory("All")}>All</button>&nbsp;
                                    <button 
                                        className={category === 'Top featured' ? 'active' : ''}
                                    onClick={() => setCategory("Top featured")}>Top featured</button>&nbsp;
                                    <button
                                        className={category === 'Best seller' ? 'active' : ''}
                                    onClick={() => setCategory("Best seller")}>Best seller</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row special-list">
                        {allProducts.map((item) => (
                            <div className="col-lg-3 col-md-6 special-grid best-seller" key={item.id}>
                                <div className="products-single fix">
                                    <div className="box-img-hover">
                                        <div className="type-lb">
                                            <p className={item.tag}>{item.tag}</p>
                                        </div>
                                        <img src={item.image01} className="img-fluid" alt="Image" />
                                        <div className="mask-icon">
                                            <ul>
                                                <li><Link to={`/product/${item.id}`}><i className="fas fa-eye"></i></Link></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                            </ul>
                                            <a className="cart" href="#">Add to Cart</a>
                                        </div>
                                    </div>
                                    <div className="why-text">
                                        <h4>{item.title}</h4>
                                        <h5> ${item.current_price}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="latest-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>latest blog</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img className="img-fluid" src={blogImg01} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="title-blog">
                                        <h3>Fusce in augue non nisi fringilla</h3>
                                        <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                                    </div>
                                    <ul className="option-blog">
                                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fas fa-eye"></i></a></li>
                                        <li><a href="#"><i className="far fa-comments"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img className="img-fluid" src={blogImg02} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="title-blog">
                                        <h3>Fusce in augue non nisi fringilla</h3>
                                        <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                                    </div>
                                    <ul className="option-blog">
                                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fas fa-eye"></i></a></li>
                                        <li><a href="#"><i className="far fa-comments"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img className="img-fluid" src={blogImg03} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="title-blog">
                                        <h3>Fusce in augue non nisi fringilla</h3>
                                        <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                                    </div>
                                    <ul className="option-blog">
                                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fas fa-eye"></i></a></li>
                                        <li><a href="#"><i className="far fa-comments"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;