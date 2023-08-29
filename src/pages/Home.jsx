import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import products from "../assets/fake-data/products";
import {useDispatch} from "react-redux";
import {cartActions} from "../redux/cart/cartSlice";


const Home = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState("All");
    const [allProducts, setAllProducts] = useState(products);

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
                            <div className="col-lg-3 col-md-6 special-grid best-seller" key={item.id}>
                                <div className="products-single fix">
                                    <div className="box-img-hover">
                                        <div className="type-lb">
                                            <p className={item.tag}>{item.tag}</p>
                                        </div>
                                        <img src={item.image01} className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                            <ul>
                                                <li><Link to={`/product/${item.id}`}><i
                                                    className="fas fa-eye"></i></Link></li>
                                                <li><a href="#" data-toggle="tooltip" data-placement="right"
                                                       title="Compare"><i className="fas fa-sync-alt"></i></a></li>
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
                                            <button onClick={() => addToCart(item)} className="btn hvr-hover" style={{
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
            </div>

        </section>
    );
}

export default Home;