import React from 'react'
import {Switch, Route} from "react-router-dom"
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import Home from './components/Home'

function Router() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={AddProduct} />
                <Route exact path="/edit/:id" component={EditProduct} />
            </Switch>
        </div>
    )
}

export default Router
