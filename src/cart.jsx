import React from 'react'
import CardProduct from './card'
import { cart } from './data/cart';
import Row from './row';
import './cart.css';

const Cart = () => {
    let col = [];


    for (let i = 0; i < cart.length; i++) {
        col.push(
            <CardProduct key={cart[i]['id']} prod={cart[i]} />
        );
    }

    return <div className="container">
        {
            col.length > 0 ? <Row>
                {col.map((child) => child)}
            </Row> : <h1 className="cartEmpty"> Nenhum produto adicionado ao carrinho!</h1>
        }
    </div>
}


export default Cart;