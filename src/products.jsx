import React from 'react';
import ProductsList from './data/products';
import Row from './row';
import CardProduct from './card'

const Products = () => {
    let col = [];


    for (let i = 0; i < ProductsList.length; i++) {
        col.push(
            <CardProduct key={ProductsList[i]['id']} prod={ProductsList[i]} />
        );
    }

    return <div className="container">
        {
            <Row>
                {col.map((child) => child)}
            </Row>
        }
    </div>
}

export default Products;