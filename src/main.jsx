import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './content.css';

import Products from './products';
import Cart from './cart';

export default props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Products />
            </Route>
            <Route exact path="/teste">
                <Cart />
            </Route>
        </Switch>
    </main>
);