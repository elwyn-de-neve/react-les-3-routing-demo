import React from 'react';
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const { id } = useParams()

    return (
        <>
            <h1>Product { id }</h1>
            <div className="product-img-lg"></div>
            <p><strong>This is product { id }</strong></p>
            <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae cupiditate deleniti ea et illo, illum itaque modi nulla officiis perspiciatis possimus quae quod reprehenderit sapiente sint tempore. Ad debitis, deleniti earum laudantium quia quidem quos. Assumenda libero omnis quae.</p>
        </>
    );
};

export default ProductPage;