import React from 'react';
import "./CreateProduct.scss";
import {useFirebase, useFirestore} from "react-redux-firebase";
import {useHistory} from "react-router";
import ProductForm from "../../components/ProductForm/ProductForm";
import getRandomName from "../../helpers/name-generator";

const CreateProduct = () => {

  const firebase = useFirebase();
  const firestore = useFirestore();
  const history = useHistory();

  const onFinish = values => {
    Object.keys(values).forEach(key => values[key] === undefined ? delete values[key] : {});

    if(values.discountEndDate) {
      values.discountEndDate = +values.discountEndDate;
    }

    const name = getRandomName();
    const storageRef = firebase.storage().ref()
    const fileRef = storageRef.child(name);

    loadPhoto(fileRef, values.photo).then(async (photo) => {
      const url = await getUrlPhoto(photo);

      values.photo = {name, url};

      createProduct(values);
    })
  };

  const createProduct = (data) => {
    firestore.collection('products').add(data)
      .then(() => history.push('/products'));
  }

  const loadPhoto = (fileRef, photo) => {
    return fileRef
      .putString(photo.url, 'data_url',{contentType: photo.type})
  }

  const getUrlPhoto = async (image) => {
    return image.ref.getDownloadURL()
  }

  return (
    <ProductForm name="Create" onFinish={onFinish}/>
  );
}

export default CreateProduct;
