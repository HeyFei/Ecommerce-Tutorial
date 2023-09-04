import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux';
import {useParams} from "react-router-dom";
import {cartActions} from "../redux/cart/cartSlice";
import {favouriteActions} from "../redux/favourite/favouriteSlice";
import {fetchData} from "../util/fetchData";

const ProductDetail = () => {

    const dispatch = useDispatch();
    const {id} = useParams();

    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});


    useEffect(() => {
        const fetchProductData = async () => {
            const productPartData = await fetchData(
                "http://127.0.0.1/api/product/view?id=" + id
            );
            setProduct(productPartData.data);
        };
        fetchProductData();

    }, []);
    const {title, original_price, current_price, description, image} = product;

    const onChangeQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                image,
                quantity,
                price: current_price
            })
        );
    };

    const addToWishList = () => {
        dispatch(
            favouriteActions.addItem({
                id,
                title,
                image,
                price: current_price
            })
        )
    }

    return (
        <section>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Shop Detail</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shop-detail-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-6">
                            <div id="carousel-example-1" className="single-product-slider carousel slide"
                                 data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active"><img className="d-block w-100" src={image}
                                                                               alt="First slide"/></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-6">
                            <div className="single-product-details">
                                <h2>{title}</h2>
                                <h5>
                                    <del>$ {original_price}</del>
                                    ${current_price}</h5>
                                <p className="available-stock"><span>&nbsp;</span></p>
                                <h4>Short Description:</h4>
                                <p>{description}</p>
                                <ul>
                                    <li>
                                        <div className="form-group quantity-box">
                                            <label className="control-label">Quantity</label>
                                            <input className="form-control" min="1" max="20" type="number"
                                                   defaultValue={1} onChange={onChangeQuantity}/>
                                        </div>
                                    </li>
                                </ul>

                                <div className="add-to-btn">
                                    <div className="add-comp">
                                        <button onClick={() => addToWishList()} className="btn hvr-hover" style={{
                                            color: "#FFFFFF",
                                            fontWeight: 700,
                                            padding: "10px 20px",
                                            marginBottom: "30px",
                                            border: "none"
                                        }}><i className="fas fa-heart"></i> Add to wishlist
                                        </button>
                                        &nbsp;
                                        <button onClick={() => addToCart()} className="btn hvr-hover" style={{
                                            color: "#FFFFFF",
                                            fontWeight: 700,
                                            padding: "10px 20px",
                                            marginBottom: "30px",
                                            border: "none"
                                        }}><i className="fas fa-cart-plus"></i> Add to Cart
                                        </button>
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
                                        <img className="rounded-circle border p-1"
                                             src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                             alt="Generic placeholder image"/>
                                    </div>
                                    <div className="media-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim
                                            aperiam inventore, similique necessitatibus neque non! Doloribus, modi
                                            sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus
                                            quae sint natus.</p>
                                        <small className="text-muted">Posted by Anonymous on 3/1/18</small>
                                    </div>
                                </div>
                                <hr/>
                                <div className="media mb-3">
                                    <div className="mr-2">
                                        <img className="rounded-circle border p-1"
                                             src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                             alt="Generic placeholder image"/>
                                    </div>
                                    <div className="media-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim
                                            aperiam inventore, similique necessitatibus neque non! Doloribus, modi
                                            sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus
                                            quae sint natus.</p>
                                        <small className="text-muted">Posted by Anonymous on 3/1/18</small>
                                    </div>
                                </div>
                                <hr/>
                                <div className="media mb-3">
                                    <div className="mr-2">
                                        <img className="rounded-circle border p-1"
                                             src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                             alt="Generic placeholder image"/>
                                    </div>
                                    <div className="media-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim
                                            aperiam inventore, similique necessitatibus neque non! Doloribus, modi
                                            sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus
                                            quae sint natus.</p>
                                        <small className="text-muted">Posted by Anonymous on 3/1/18</small>
                                    </div>
                                </div>
                                <hr/>
                                <button className="btn hvr-hover" style={{
                                    color: "#FFFFFF",
                                    fontWeight: 700,
                                    fontSize: 18,
                                    padding: "12px 25px",
                                    border: "none"
                                }}>Leave a Review
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;