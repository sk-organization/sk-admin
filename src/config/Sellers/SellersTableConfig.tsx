import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from 'constants/apollo';

export const sellersUserTableConfig = [
  {
    title: 'Image',
    dataIndex: 'user.image',
    key: 'image',
    render: image => <Avatar size={60} src={IMAGE_HOST + image} />,
  },
  {
    title: 'Name',
    dataIndex: 'user.name',
    key: 'nameInfo',
  },
  {
    title: 'Phone',
    dataIndex: 'user.phone',
    key: 'phone',
  },
  {
    title: 'Location',
    dataIndex: 'user.location.city',
    key: 'location',
  },
  {
    title: 'Shop Name',
    dataIndex: 'shopName',
    key: 'shopName',
  },
];
