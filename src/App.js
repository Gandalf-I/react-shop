import './App.scss';
import React, {Suspense, lazy} from 'react';
import {Redirect, Switch, Route} from "react-router-dom";

import Loader from "./components/Loader/Loader";
import AuthRoute from "./components/AuthRoute/AuthRoute";

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
          <AuthRoute exact path="/" component={ProductList}/>
          <AuthRoute path="/create-product" component={CreateProduct}/>
          <AuthRoute path="/edit-product/:id" component={EditProduct}/>
          <Redirect to='/auth'/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
