import React from "react";
import "./ProductList.scss"
import {
  isEmpty,
} from "react-redux-firebase";
import ProductCard from "../../../components/ProductCard/ProductCard";

const ProductList = ({products}) => {
  return (
    isEmpty(products) ?
      <p>Empty</p> :
      <div className="ProductList">
        {products && products.map((product) => <ProductCard product={product} key={product.id}/>)}
      </div>
  )
}

export default ProductList
