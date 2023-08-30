import React, {useState, useEffect} from "react";
import products from "../assets/fake-data/products";
import Product from "../components/Product/Product";

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
    }, [category]);

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
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="special-menu text-center">
                                <div className="button-group filter-button-group">
                                    <button
                                        className={category === 'All' ? 'active' : ''}
                                        onClick={() => setCategory("All")}>All
                                    </button>
                                    &nbsp;
                                    <button
                                        className={category === 'Top featured' ? 'active' : ''}
                                        onClick={() => setCategory("Top featured")}>Top featured
                                    </button>
                                    &nbsp;
                                    <button
                                        className={category === 'Best seller' ? 'active' : ''}
                                        onClick={() => setCategory("Best seller")}>Best seller
                                    </button>
                                </div>
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