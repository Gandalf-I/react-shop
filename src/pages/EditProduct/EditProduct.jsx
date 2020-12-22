import React from 'react';
import {isLoaded, useFirebase, useFirestore, useFirestoreConnect} from "react-redux-firebase";
import {useHistory, useParams} from "react-router";
import ProductForm from "../../components/ProductForm/ProductForm";
import {useSelector} from "react-redux";
import {message} from "antd";
import Loader from "../../components/Loader/Loader";
import getRandomName from "../../helpers/name-generator";

const EditProduct = () => {
  const {id} = useParams();

  const firebase = useFirebase();
  const firestore = useFirestore();
  const history = useHistory();

  useFirestoreConnect(`products/${id}`)

  const product = useSelector(
    ({firestore: {data}}) => data.products && data.products[id]
  )

  const onFinish = values => {
    Object.keys(values).forEach(key => values[key] === undefined ? values[key] = '' : {});

    if (values.discountEndDate) {
      values.discountEndDate = +values.discountEndDate;
    }

    try {
      // photo don't change
      if(!values.type) {
        updateProduct(values);
      } else {
        updateProductAndPhoto(values)
      }
    } catch {
      message.error('Error update!')
    }

  };

  const updateProductAndPhoto = (values) => {
    const name = getRandomName();
    const storageRef = firebase.storage().ref()
    const fileRef = storageRef.child(name)

    updatePhoto(fileRef, values).then(async (photo) => {
      const url = await getUrlPhoto(photo);

      values.photo = {name, url};

      updateProduct(values);
    })
  }

  const updatePhoto = (fileRef, date) => {
    return fileRef
      .putString(date.photo.url, 'data_url', {contentType: date.photo.type})
  }

  const getUrlPhoto = (photo) => {
    return photo.ref.getDownloadURL()
  }

  const updateProduct = (data) => {
    firestore.collection('products').doc(id).update(data)
      .then(() => history.push('/products'));
  }

  return (
    !isLoaded(product) ?
      <Loader/> :
      <ProductForm name="Edit" onFinish={onFinish} initialValue={product}/>
  );
}
export default EditProduct;
