import React, {useState, useEffect} from "react";
import {fetchData} from "../util/fetchData";
import Product from "../components/Product/Product";

const Home = () => {
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

                    <div className="row special-list">
                        {allProducts.map((item) => (
                            <Product item={item} key={item.id} uri="/"/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;