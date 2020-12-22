import React from 'react';
import ProductList from "./ProductList/ProductList";
import "./Products.scss"
import {isLoaded, useFirestoreConnect} from "react-redux-firebase";
import {useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";

const Products = () => {

  useFirestoreConnect('products');

  const products = useSelector((state) => state.firestore.ordered.products)

  return (
    <div className="Products">
      {
        !isLoaded(products) ?
          <Loader/> :
          <ProductList products={products}/>
      }
    </div>
  );
}

export default Products
