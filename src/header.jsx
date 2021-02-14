import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default props => (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link className="navbar-brand" to="/"><h1 className="textTitle">WAND-COMMERCE</h1></Link>
                    </li>
                </ul>
                <Link className="navbar-brand" to="/teste"><i className="fa fa-shopping-cart" aria-hidden="true"></i>   Carrinho</Link>
            </div>
        </nav>
    </>
);