import React from 'react';
import { Link } from 'react-router-dom';
import './main.css'

export default props => (
    <aside className="Main">
        <nav>
            <ul>
                <li>
                    <Link to="/">Carrinho de compras</Link>
                </li>
                <li>
                    <Link to="/teste">Minhas compras</Link>
                </li>
            </ul>
        </nav>
    </aside>
);