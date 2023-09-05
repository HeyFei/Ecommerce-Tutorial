import React, {useState, useEffect} from "react";
import {fetchData} from "../util/fetchData";
import Product from "../components/Product/Product";
import usePagination from "../util/Pagination";
import Pagination from '@mui/material/Pagination';

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

    let [page, setPage] = useState(1);
    const PER_PAGE = 20;

    const count = Math.ceil(allProducts.length / PER_PAGE);
    const _DATA = usePagination(allProducts, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

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
                        {_DATA.currentData().map((item) => (
                            <Product item={item} key={item.id} uri="/"/>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="special-menu text-center">
                        <div className="button-group filter-button-group">
                            <Pagination
                                count={count}
                                size="large"
                                page={page}
                                variant="outlined"
                                shape="rounded"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;