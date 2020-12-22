import React, {useState} from "react";
import {Button, Form} from "antd";
import {
  DateEndDiscount,
  DescriptionValidator, DiscountValidator,
  PhotoValidator, PriceValidator,
  ProductValidateMessages,
  TitleValidator
} from "../../validators";
import UploadImage from "../UploadImage/UploadImage";
import {DateField, DiscountField, InputField, PriceField, TextAreaField} from "../Inputs/Inputs";
import "./ProductForm.scss"
import moment from "moment";

const initialValueBase = {
  photo: '',
  title: '',
  description: '',
  price: '',
  discount: '',
  discountEndDate: null
}

const ProductForm = ({name, initialValue, onFinish}) => {

  const discountEndDate = initialValue?.discountEndDate;

  const initValue = {
    ...initialValueBase,
    ...initialValue,
    discountEndDate: discountEndDate ? moment(discountEndDate): null
  }

  const [value, setValue] = useState(initValue);

  const onChange = (_, data) => {
    setValue(data);
  }

  return (
    <Form
      className="ProductForm"
      name="product"
      onFinish={onFinish}
      onValuesChange={onChange}
      validateMessages={ProductValidateMessages}
      scrollToFirstError
      initialValues={initValue}
    >
      <Form.Item
        name="photo"
        rules={PhotoValidator}
        className="Center"
      >
        <UploadImage photo={initialValue?.photo}/>
      </Form.Item>

      <Form.Item
        name="title"
        label="Title"
        rules={TitleValidator}
      >
        <InputField/>
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={DescriptionValidator}
      >
        <TextAreaField maxLength={200}/>
      </Form.Item>

      <Form.Item
        name="price"
        label="Price"
        rules={PriceValidator}
      >
        <PriceField max={99999999.99}/>
      </Form.Item>


      <Form.Item
        name="discount"
        label="Discount"
        rules={DiscountValidator}
      >
        <DiscountField/>
      </Form.Item>
      {
        value?.discount &&
        <Form.Item
          name="discountEndDate"
          label="Discount end date"
          rules={DateEndDiscount}
        >
          <DateField/>
        </Form.Item>
      }
      <Form.Item>
        <Button type="primary" htmlType="submit" className="FormButton">
          {name}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ProductForm
