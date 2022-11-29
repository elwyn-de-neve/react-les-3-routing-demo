import './App.css';
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Product1 from "./pages/Product-1/Product-1";
import Product2 from "./pages/Product-2/Product-2";
import Product3 from "./pages/Product-3/Product-3";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import ProductPage from "./pages/ProductPage/ProductPage";
import Account from "./pages/account/account";
import { useState } from "react";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    const [ auth, setAuth ] = useState( false )

    return (
        <>
            <Nav auth={ auth } setAuth={ setAuth }/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/products" element={ <Products/> }/>
                {/*<Route path="/product-1" element={ <Product1/> }/>*/}
                {/*<Route path="/product-2" element={ <Product2/> }/>*/}
                {/*<Route path="/product-3" element={ <Product3/> }/>*/}
                <Route path="/product-page/:id" element={ <ProductPage/> }/>
                <Route path="/account" element={ auth ? <Account/> : <Navigate to="/"/> }/>
                <Route path="*" element={ <NotFound/> }/>
            </Routes>
        </>
    );
}

export default App;
