import React from 'react';
import Drawer from './drawer';
import Main from './main';
import Header from './header';
import './app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

export default props => (
    <div>
        <Header />
        <div className="App">
            <Main />
        </div>
    </div>
);