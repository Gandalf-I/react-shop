import React from "react";
import {Card} from 'antd';
import {CloseOutlined, EditOutlined} from '@ant-design/icons';
import "./ProductCard.scss"
import {Link} from "react-router-dom";
import DescriptionCard from "./DescriptionCard/DescriptionCard";
import defaultImage from "../../assets/images/default-image.png"
import {useFirestore, useFirestoreConnect} from "react-redux-firebase";
const {Meta} = Card;

const ProductCard = ({product}) => {

  const firestore = useFirestore();

  useFirestoreConnect('products')

  const deleteProduct = () => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm('You sure delete product?')) {
      firestore.delete(`products/${product.id}`)
    }
  }


  return (
    <Card
      className="Card"
      cover={
        <img
          alt="product"
          src={product?.photo.url || defaultImage}
        />
      }
      actions={[
        <Link to={`/edit-product/${product?.id}`}>
          <EditOutlined key="edit"/>,
        </Link>,
        <CloseOutlined key="delete" onClick={() => deleteProduct()}/>
      ]}
    >
      <Meta
        title={<p className="ProductTitle">{product?.title}</p>}
        description={<DescriptionCard {...product}/>}
      />
    </Card>
  )
}

export default ProductCard
