import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main';
import Product from './pages/product';
import AddProduct from './pages/addProduct';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
            <Route path="/new" component={AddProduct} />

        </Switch>
    </BrowserRouter>
);

export default Routes;