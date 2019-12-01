import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from 'constants/apollo';

export const sellersTableConfig = [
  {
    title: 'Image',
    dataIndex: 'variations',
    key: 'imagedfsdf',
    render: variations => <Avatar src={IMAGE_HOST + variations[0].images[0]} />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Customer Price',
    dataIndex: 'price',
    key: 'Price',
  },
  {
    title: 'Seller Price',
    dataIndex: 'sellerPrice',
    key: 'sellerPrice',
  },
  {
    title: 'Category',
    dataIndex: 'category.name',
    key: 'phone',
  },
  {
    title: 'Sub Category',
    dataIndex: 'subCategory.name',
    key: 'phone',
  },
  {
    title: 'Quantity',
    dataIndex: 'variations',
    key: 'quantity',
    render: variations => {
      let quantity = 0;
      variations.forEach(variation => {
        variation.sizes.forEach(size => {
          quantity += size.quantity;
        });
      });
      return quantity;
    },
  },
];
