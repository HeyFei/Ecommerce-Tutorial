import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {favouriteActions} from "../redux/favourite/favouriteSlice";
import {cartActions} from "../redux/cart/cartSlice";

const Favourite = () => {
    const navigate = useNavigate()
    const authUser = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!authUser) navigate('/login');
    }, [authUser]);

    const favouriteItems = useSelector((state) => state.favourite.favouriteItems);

    return (
        <section>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Favourites</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wishlist-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-main table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Images</th>
                                        <th>Product Name</th>
                                        <th>Unit Price</th>
                                        <th>Stock</th>
                                        <th>Add Item</th>
                                        <th>Remove</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {favouriteItems.map((item) => (
                                        <Tr item={item} key={item.id}/>
                                    ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

const Tr = (props) => {
    const {id, image, title, price} = props.item;
    const dispatch = useDispatch();

    const addToCart = (item) => {
        const {id, title, image, price} = item;
        dispatch(
            cartActions.addItem({
                id,
                title,
                image,
                price
            })
        )
    }

    const removeItem = (item) => {
        dispatch(favouriteActions.removeItem(item.id));
    }

    return (
        <tr>
            <td className="thumbnail-img">
                <Link to={`/product/${id}`}>
                    <img className="img-fluid" src={image} alt=""/>
                </Link>
            </td>
            <td className="name-pr">
                <Link to={`/product/${id}`}>
                    {title}
                </Link>
            </td>
            <td className="price-pr">
                <p>$ {price}</p>
            </td>
            <td className="quantity-box">In Stock</td>
            <td className="add-pr">
                <button onClick={() => addToCart(props.item)} className="btn hvr-hover" style={{
                    color: "#FFFFFF",
                    fontWeight: 700,
                    padding: "10px 20px",
                    border: "none"
                }}>Add to Cart
                </button>
            </td>
            <td className="remove-pr">
                <button onClick={() => removeItem(props.item)} style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer"
                }}>
                    <i className="fas fa-times"></i>
                </button>
            </td>
        </tr>
    );
};

export default Favourite;