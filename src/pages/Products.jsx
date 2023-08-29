import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import products from "../assets/fake-data/products";
import {cartActions} from "../redux/cart/cartSlice";

const Products = () => {
    const [allProducts, setAllProducts] = useState(products);

    const dispatch = useDispatch();
    const addToCart = (item) => {
        const {id, title, image01, current_price} = item;
        let price = current_price;
        dispatch(
            cartActions.addItem({
                id,
                title,
                image01,
                price,
            })
        )
    }

    return (
        <section>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Shop</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shop-box-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 shop-content-right">
                            <div className="right-product-box">
                                <div className="product-item-filter row">
                                    <div className="col-12 col-sm-8 text-center text-sm-left">
                                        <div className="toolbar-sorter-right">
                                            <span>Sort by </span>
                                            <select id="basic" className="selectpicker show-tick form-control"
                                                    data-placeholder="$ USD">
                                                <option data-display="Select">Nothing</option>
                                                <option value="1">Popularity</option>
                                                <option value="2">High Price → High Price</option>
                                                <option value="3">Low Price → High Price</option>
                                                <option value="4">Best Selling</option>
                                            </select>
                                        </div>
                                        <p>Showing all 4 results</p>
                                    </div>
                                    <div className="col-12 col-sm-4 text-center text-sm-right">
                                        <ul className="nav nav-tabs ml-auto">
                                            <li>
                                                <a className="nav-link active" href="#grid-view" data-toggle="tab"> <i
                                                    className="fa fa-th"></i> </a>
                                            </li>
                                            <li>
                                                <a className="nav-link" href="#list-view" data-toggle="tab"> <i
                                                    className="fa fa-list-ul"></i> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-categorie-box">
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane fade show active" id="grid-view">
                                            <div className="row">
                                                {allProducts.map((item) => (
                                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4" key={item.id}>
                                                        <div className="products-single fix">
                                                            <div className="box-img-hover">
                                                                <div className="type-lb">
                                                                    <p className={item.tag}>{item.tag}</p>
                                                                </div>
                                                                <img src={item.image01} className="img-fluid"
                                                                     alt="Image"/>
                                                                <div className="mask-icon">
                                                                    <ul>
                                                                        <li><Link to={`/product/${item.id}`}><i
                                                                            className="fas fa-eye"></i></Link></li>
                                                                        <li><a href="#" data-toggle="tooltip"
                                                                               data-placement="right" title="Compare"><i
                                                                            className="fas fa-sync-alt"></i></a></li>
                                                                        <li>
                                                                            <button className="btn hvr-hover" style={{
                                                                                color: "#FFFFFF",
                                                                                padding: "5px 10px",
                                                                                fontStyle: "normal",
                                                                                fontVariant: "normal",
                                                                                textRendering: "auto",
                                                                                lineHeight: "1px",
                                                                                border: "0px",
                                                                                display: "block"
                                                                            }}>
                                                                                <i className="far fa-heart"></i>
                                                                            </button>
                                                                        </li>
                                                                    </ul>
                                                                    <button onClick={() => addToCart(item)}
                                                                            className="btn hvr-hover" style={{
                                                                        position: "absolute",
                                                                        bottom: "0px",
                                                                        left: "0px",
                                                                        padding: "10px 20px",
                                                                        color: "#FFFFFF",
                                                                        fontWeight: 700,
                                                                        border: "0px"
                                                                    }}>Add to Cart
                                                                    </button>
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


                                        <div role="tabpanel" className="tab-pane fade" id="list-view">
                                            {allProducts.map((item) => (
                                                <div className="list-view-box" key={item.id}>
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                            <div className="products-single fix">
                                                                <div className="box-img-hover">
                                                                    <div className="type-lb">
                                                                        <p className={item.tag}>{item.tag}</p>
                                                                    </div>
                                                                    <img src={item.image01} className="img-fluid"
                                                                         alt="Image"/>
                                                                    <div className="mask-icon">
                                                                        <ul>
                                                                            <li><Link to={`/product/${item.id}`}><i
                                                                                className="fas fa-eye"></i></Link></li>
                                                                            <li><a href="#" data-toggle="tooltip"
                                                                                   data-placement="right"
                                                                                   title="Compare"><i
                                                                                className="fas fa-sync-alt"></i></a>
                                                                            </li>
                                                                            <li>
                                                                                <button className="btn hvr-hover"
                                                                                        style={{
                                                                                            color: "#FFFFFF",
                                                                                            padding: "5px 10px",
                                                                                            fontStyle: "normal",
                                                                                            fontVariant: "normal",
                                                                                            textRendering: "auto",
                                                                                            lineHeight: "1px",
                                                                                            border: "0px",
                                                                                            display: "block"
                                                                                        }}>
                                                                                    <i className="far fa-heart"></i>
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                                            <div className="why-text full-width">
                                                                <h4>{item.title}</h4>
                                                                <h5>
                                                                    <del>$ {item.original_price}</del>
                                                                    ${item.current_price}</h5>
                                                                <p>{item.desc}</p>
                                                                <button onClick={() => addToCart(item)}
                                                                        className="btn hvr-hover" style={{
                                                                    bottom: "0px",
                                                                    left: "0px",
                                                                    padding: "10px 20px",
                                                                    color: "#FFFFFF",
                                                                    fontWeight: 700,
                                                                    border: "0px"
                                                                }}>Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
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

export default Products;