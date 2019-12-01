import React from 'react';
import { Tag } from 'antd';

const ProductInfo = ({ product }) => {
  const {
    name,
    price,
    discountPercent,
    sellerPrice,
    returnableSKMoney,
    createdAt,
    dispatchDuration,
    deliveryDuration,
    tags,
  } = product;

  const {
    category: { name: cName },
    subCategory: { name: sName },
  } = product;

  return (
    <div>
      <h2>Product Info</h2>
      <div>
        <div>
          Name: <strong>{name}</strong>
        </div>
        <div>
          Marked Price: <strong>₹{price}</strong>
        </div>
        {discountPercent && (
          <div>
            Discount: <strong> {discountPercent}%</strong>
          </div>
        )}

        {/* <div>
          Marked Price:
          <strong>
            ₹
            {discountPercent > 0
              ? price + price * (discountPercent / 100)
              : price}
          </strong>
        </div> */}

        <div>
          Seller Price: <strong> ₹{sellerPrice}</strong>
        </div>

        <div>
          SK Money: <strong> ₹{returnableSKMoney}</strong>
        </div>

        <div>
          Created Date: <strong>{new Date(createdAt).toDateString()}</strong>
        </div>
        {dispatchDuration && (
          <div>
            Dispatch Duration: <strong>{dispatchDuration.toLowerCase()}</strong>
          </div>
        )}
        {deliveryDuration && (
          <div>
            Delivery Duration: <strong>{deliveryDuration.toLowerCase()}</strong>
          </div>
        )}
        <div>
          Category: <strong>{cName}</strong>
        </div>
        <div>
          Sub Category: <strong>{sName}</strong>
        </div>
        {tags.name && (
          <div>
            Tags:
            {tags.map(tag => (
              <Tag color="purple">{tags.name}</Tag>
            ))}
          </div>
        )}
        <br />
      </div>
    </div>
  );
};

export default ProductInfo;
