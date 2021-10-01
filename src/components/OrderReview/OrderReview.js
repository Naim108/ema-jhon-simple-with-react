import React from 'react';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products]=useProducts();
    return (
        <div>
           {
               products.map(product=>console.log(product.name))
           }
        </div>
    );
};

export default OrderReview;