import React, { useState, useEffect } from "react";
import girl1 from "../assets/images/home/girl1.jpg";
import girl2 from "../assets/images/home/girl2.jpg";
import girl3 from "../assets/images/home/girl3.jpg";
import pricing from "../assets/images/home/pricing.png";
import products from "../assets/fake-data/products";

const home__banners = [
    {
        title:"Free E-Commerce Template",
        desc:"banner1 description",
        pic1:girl1,
        pic2:pricing
    }
    // {
    //     title:"100% Responsive Design",
    //     desc:"banner2 description",
    //     pic1:girl2,
    //     pic2:pricing
    // },
    // {
    //     title:"",
    //     desc:"banner3 description",
    //     pic1:girl3,
    //     pic2:pricing
    // }
];

const Home = () => {
    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);

    useEffect(() => {
        if (category == "All") {
            setAllProducts(products);
        }
        if (category == "Women") {
            const filterProducts = products.filter(
                (item) => item.category == "Women"
            );
            setAllProducts(filterProducts);
        }
        if (category == "Men") {
            const filterProducts = products.filter(
                (item) => item.category == "Men"
            );
            setAllProducts(filterProducts);
        }
    },[category]);

    return (
        <div>
            <section id="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#slider-carousel" data-slide-to="0" className="active"></li>
                                </ol>
                                <div className="carousel-inner">
                                    {home__banners.map((item,index) => (
                                        <div key={index} className="item active">
                                            <div className="col-sm-6">
                                                <h1><span>E</span>-SHOPPER</h1>
                                                <h2>{item.title}</h2>
                                                <p>{item.desc}</p>
                                                <button type="button" className="btn btn-default get">Get it now</button>
                                            </div>
                                            <div className="col-sm-6">
                                                <img src={item.pic1} className="girl img-responsive" alt="" />
                                                <img src={item.pic2}  className="pricing" alt="" />
                                            </div>
                                        </div>                                
                                    ))}
                                </div>
                                
                                <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="left-sidebar">
                                <h2>Category</h2>
                                <div className="panel-group category-products" id="accordian">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><a onClick={() => setCategory("All")}>All</a></h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><a onClick={() => setCategory("Women")}>Women</a></h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><a onClick={() => setCategory("Men")}>Men</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-9 padding-right">
                            <div className="features_items">
                                <h2 className="title text-center">Features Items</h2>
                                {allProducts.map((item) => (
                                    <div className="col-sm-4" key={item.id}>
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={item.image01} alt="" />
                                                    <h2>${item.price}</h2>
                                                    <p>{item.title}</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                </div>
                                            </div>
                                            <div className="choose">
                                                <ul className="nav nav-pills nav-justified">
                                                    <li><a href="#"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                                                    <li><a href="#"><i className="fa fa-plus-square"></i>Add to compare</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;