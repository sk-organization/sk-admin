import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from 'constants/apollo';

export const subCategoriesTableConfig = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render: image => {
      return (
        <div>
          <Avatar shape="square" size={100} src={IMAGE_HOST + image} />;
        </div>
      );
    },
  },
  {
    title: 'Category',
    dataIndex: 'name',
  },

  {
    title: 'Total Products',
    dataIndex: 'totalProducts',
  },
];
