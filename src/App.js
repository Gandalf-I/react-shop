import './App.scss';
import React, {Suspense, lazy} from 'react';
import {Redirect, Switch, Route} from "react-router-dom";

import Loader from "./components/Loader/Loader";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import {useSelector} from "react-redux";
import {isLoaded} from "react-redux-firebase";

const Auth = lazy(() => import('./pages/Auth/Auth'));
const ProductList = lazy(() => import('./pages/ProductList/ProductList'));
const CreateProduct = lazy(() => import('./pages/CreateProduct/CreateProduct'));
const EditProduct = lazy(() => import('./pages/EditProduct/EditProduct'));

const App = () => {

  const auth = useSelector(state => state.firebase.auth)

  return (
    <div className="App">
      {
        !isLoaded(auth) ?
          <Loader/> :
          <Suspense fallback={Loader}>
            <Switch>
              <Route path="/auth" component={Auth}/>
              <AuthRoute exact path="/" component={ProductList}/>
              <AuthRoute path="/create-product" component={CreateProduct}/>
              <AuthRoute path="/edit-product/:id" component={EditProduct}/>
              <Redirect to='/'/>
            </Switch>
          </Suspense>
      }
    </div>
  );
}

export default App;
