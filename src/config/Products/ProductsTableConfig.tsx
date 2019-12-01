import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from 'constants/apollo';

export const productsTableConfig = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render: image => {
      return (
        <Avatar
          size={100}
          shape="square"
          src={IMAGE_HOST + image}
          style={{ marginTop: 40, marginLeft: 20 }}
        />
      );
    },
  },

  {
    title: 'Products',
    dataIndex: 'generalInfo',
    render: product => {
      return (
        <div>
          <strong>Products Info</strong>
          <div>
            Product Name:
            <strong> {product.name}</strong>
          </div>
          <div>
            Product Category:
            <strong>{product.category.replace('-', ' ')}</strong>
          </div>
          <div style={{ marginTop: 5 }}>
            <strong>Seller's Info</strong>
            <div>
              Shop Name: <strong>{product.sellerShopName}</strong>
            </div>
            <div>
              Seller Name: <strong>{product.sellerName}</strong>
            </div>
          </div>
        </div>
      );
    },
  },

  {
    title: 'Price',
    dataIndex: 'priceInfo',
    render: product => {
      return (
        <div>
          <div>
            SellerPrice:
            <strong> ₹{product.sellerPrice}</strong>
          </div>

          <div>
            Price:
            <strong> ₹{product.price}</strong>
          </div>

          <div>
            Discount:
            <strong> {product.discountPercent}%</strong>
          </div>

          <div>
            Marked Price:
            <strong>
              ₹{product.price + product.price * (product.discountPercent / 100)}
            </strong>
          </div>
        </div>
      );
    },
  },
];
