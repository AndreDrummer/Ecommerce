import React from 'react';
import './card.css';

import { addCart, removeFromCart } from './data/cart';

const CardProduct = (props) => (
    < div >
        <div class="card produtCard">
            <img class="card-img-top image" src={`./assets/${props.prod['image']}`} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title title">{props.prod['name']}</h5>
                <p class="card-text">R$ {props.prod['price']}</p>
                <div className="buttons">
                    <button onClick={() => { }} type="button" class="btn btn-sm btn-dark">Comprar</button>
                    <button
                        onClick={() => props.prod['isInCart'] ? removeFromCart(props.prod) : addCart(props.prod)}
                        type="button" class="btn-sm btn btn-outline-dark">
                        <i class={` ${props.prod['isInCart'] ? "fa fa-trash" : "fa fa-shopping-cart"}`} aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    </div >
);

export default CardProduct;