import './App.scss';
import React, {Suspense, lazy} from 'react';
import {Redirect, Switch, Route} from "react-router-dom";

import Loader from "./components/Loader/Loader";

const Auth = lazy(() => import('./pages/Auth/Auth'));
const ProductList = lazy(() => import('./pages/ProductList/ProductList'));
const CreateProduct = lazy(() => import('./pages/CreateProduct/CreateProduct'));
const EditProduct = lazy(() => import('./pages/EditProduct/EditProduct'));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={Loader}>
        <Switch>
          <Route path="/auth" component={Auth}/>
          <Route exact path="/" component={ProductList}/>
          <Route path="/create-product" component={CreateProduct}/>
          <Route path="/edit-product/:id" component={EditProduct}/>
          <Redirect to="/auth"/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
