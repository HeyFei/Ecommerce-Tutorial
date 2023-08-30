import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {cartActions} from "../../redux/cart/cartSlice";
import {favouriteActions} from "../../redux/favourite/favouriteSlice";


const Product = (props) => {
    const dispatch = useDispatch();

    const addToCart = (item) => {
        const {id, title, image01, current_price} = item;
        let price = current_price;
        dispatch(
            cartActions.addItem({
                id,
                title,
                image01,
                price
            })
        )
    }

    const addToWishList = (item) => {
        const {id, title, image01, current_price} = item;
        let price = current_price;
        dispatch(
            favouriteActions.addItem({
                id,
                title,
                image01,
                price
            })
        )
    }

    const {id, title, current_price, tag, image01} = props.item;
    return (
        <div className={props.uri == "products" ? 'col-sm-6 col-md-6 col-lg-4 col-xl-4' : 'col-lg-3 col-md-6 special-grid best-seller'} key={id}>
            <div className="products-single fix">
                <div className="box-img-hover">
                    <div className="type-lb">
                        <p className={tag}>{tag}</p>
                    </div>
                    <img src={image01} className="img-fluid" alt="Image"/>
                    <div className="mask-icon">
                        <ul>
                            <li><Link to={`/product/${id}`}><i
                                className="fas fa-eye"></i></Link></li>
                            <li>
                                <Link to='' onClick={() => addToWishList(props.item)}><i
                                    className="far fa-heart"></i></Link>
                            </li>
                        </ul>
                        <button onClick={() => addToCart(props.item)} className="btn hvr-hover" style={{
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
                    <h4>{title}</h4>
                    <h5> ${current_price}</h5>
                </div>
            </div>
        </div>
    )
}

export default Product