import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {cartActions} from "../redux/cart/cartSlice";
import Product from "../components/Product/Product";
import {fetchData} from "../util/fetchData";

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchProductsData = async () => {
            const productPartsData = await fetchData(
                "http://127.0.0.1/api/product/list"
            );
            setAllProducts(productPartsData.data.items);
        };
        fetchProductsData();

    }, []);

    const dispatch = useDispatch();
    const addToCart = (item) => {
        const {id, title, image, current_price} = item;
        let price = current_price;
        dispatch(
            cartActions.addItem({
                id,
                title,
                image,
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
                                                    <Product item={item} key={item.id} uri="products"/>
                                                ))}
                                            </div>
                                        </div>

                                        <div role="tabpanel" className="tab-pane fade" id="list-view">
                                            {allProducts.map((item) => (
                                                <div className="list-view-box" key={item.id}>
                                                    <div className="row">
                                                        <Product item={item} key={item.id} uri="products"/>
                                                        <div className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                                            <div className="why-text full-width">
                                                                <h4>{item.title}</h4>
                                                                <h5>
                                                                    <del>$ {item.original_price}</del>
                                                                    ${item.current_price}</h5>
                                                                <p>{item.description}</p>
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