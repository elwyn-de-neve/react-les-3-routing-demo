import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

const Nav = ( { auth, setAuth } ) => {
    const navigate = useNavigate()

    /*function handleLogin (  ) {
        setAuth( true )
        navigate("/account")
    }*/

    return (
        <>
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/" className={ ( { isActive } ) => isActive ? "active--link" : "default--link" }>Home</NavLink></li>
                    <li><NavLink to="/products" className={ ( { isActive } ) => isActive ? "active--link" : "default--link" }>Products</NavLink></li>
                    {/*<li><NavLink to="/product-1" className={ ( { isActive } ) => isActive ? "active--link" : "default--link" }>Product 1</NavLink></li>*/ }
                    {/*<li><NavLink to="/product-2" className={ ( { isActive } ) => isActive ? "active--link" : "default--link" }>Product 2</NavLink></li>*/ }
                    {/*<li><NavLink to="/product-3" className={ ( { isActive } ) => isActive ? "active--link" : "default--link" }>Product 3</NavLink></li>*/ }
                    <li><NavLink to="/product-page/4" className={ ( { isActive } ) => isActive ? "active--link" : "default--link" }>Product 4</NavLink></li>
                    <li><NavLink to="/product-page/5" className={ ( { isActive } ) => isActive ? "active--link" : "default--link" }>Product 5</NavLink></li>
                    { auth && <li><NavLink to="/account" className={ ( { isActive } ) => isActive ? "active--link" : "default--link" }>Account</NavLink></li> }
                </ul>
                <ul>
                    <li>
                        <button onClick={ () => setAuth( false ) }>Logout</button>
                        <button onClick={ () => setAuth( true ) }>Login</button>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;