import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from "../pages/Home"
import Products from "../pages/Products"
import ProductDetail from "../pages/ProductDetail"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import Contact from "../pages/Contact"
import About from "../pages/About"
import Login from "../pages/Login"
import Logout from "../pages/Logout"
import Register from "../pages/Register"
import Account from '../pages/Account'
import Favourites from '../pages/Favourites'

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/register' element={<Register />} />
        <Route path='/account' element={<Account />} />
    </Routes>
}

export default Routers