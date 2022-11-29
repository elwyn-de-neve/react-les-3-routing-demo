import React from "react";
import { Link, useParams } from "react-router-dom";

const Products = () => {

    const products = [
        { id: 1, name: "Stippel Sok" },
        { id: 2, name: "Grijze Sok" },
        { id: 3, name: "Geiten wollen Sok" },
        { id: 4, name: "Sport Sok" },
        { id: 5, name: "Hipster Sok" },
        { id: 6, name: "Wollen Sok" },
    ];

    return (
        <>
            <h1>Product Overview</h1>
            <ul className="product-overview">
                { products.map( ( product ) => {
                    return (
                        <li className="product-card" key={ product.id }>
                            <div className="product-img"></div>
                            <Link to={ "/product-page/" + product.id }>{ product.name }</Link>
                        </li>
                    );
                } ) }
            </ul>
        </>
    );
};

export default Products;