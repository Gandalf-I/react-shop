import React from 'react';
import moment from "moment";
import "./DescriptionCard.scss"

const DescriptionCard = ({description, price, discount, discountEndDate}) => {

  const isDiscountView = discount && discountEndDate >= moment()

  return (
    <div>
      <p className="Description"
         title={description}>
        {description}
      </p>
      <p className={discount && "OldPrice"}>
        Price: {Number.parseFloat(price).toFixed(2)}$
      </p>
      {
        discount &&
        <p className="NewPrice">
          New price: {(price - price * discount / 100).toFixed(2)}$
        </p>
      }
      {
        isDiscountView &&
        <p>
          Discount: {discount}%
        </p>
      }
      {
        isDiscountView &&
        <p>
          Discount end date: {moment(discountEndDate).format('YYYY-MM-DD')}
        </p>
      }
    </div>
  );
}

export default DescriptionCard
