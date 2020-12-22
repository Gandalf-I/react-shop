import './App.scss';
import React, {Suspense, lazy} from 'react';
import {Redirect, Switch, Route} from "react-router-dom";

import Loader from "./components/Loader/Loader";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import {useSelector} from "react-redux";
import {isLoaded} from "react-redux-firebase";
import AppWrapper from "./components/AppWrapper/AppWrapper";

const Auth = lazy(() => import('./pages/Auth/Auth'));
const Products = lazy(() => import('./pages/Products/Products'));
const CreateProduct = lazy(() => import('./pages/CreateProduct/CreateProduct'));
const EditProduct = lazy(() => import('./pages/EditProduct/EditProduct'));

const App = () => {

  const auth = useSelector(state => state.firebase.auth)

  return (
    <div className="App">
      {
        !isLoaded(auth) ?
          <Loader/> :
          <Suspense fallback={<Loader/>}>
            <Switch>
              <Route exact path="/auth" component={Auth}/>
              <AuthRoute>
                <AppWrapper>
                  <Switch>
                    <Route path="/products" component={Products}/>
                    <Route path="/create-product" component={CreateProduct}/>
                    <Route path="/edit-product/:id" component={EditProduct}/>
                    <Redirect to='/products'/>
                  </Switch>
                </AppWrapper>
              </AuthRoute>
              <Redirect to='/products'/>
            </Switch>
          </Suspense>
      }
    </div>
  );
}

export default App;
