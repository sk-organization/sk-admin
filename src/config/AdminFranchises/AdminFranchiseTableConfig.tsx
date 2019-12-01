import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from 'constants/apollo';

export const AdminFranchiseTableConfig = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render: image => (
      <Avatar alt="franchise images" size={50} src={IMAGE_HOST + image} />
    ),
  },

  {
    title: 'Franchise',
    dataIndex: 'user',
    render: user => (
      <div>
        {user.name && (
          <div>
            Name: <strong>{user.name}</strong>
          </div>
        )}
        {user.phone && (
          <div>
            Phone: <strong>{user.phone}</strong>
          </div>
        )}
        {user.location.address1 && (
          <div>
            Address: <strong>{user.location.address1}</strong>
          </div>
        )}
      </div>
    ),
  },

  {
    title: 'Sold By Him/Her',
    dataIndex: 'name',
  },
  {
    title: 'Sold Without Him/Her',
    dataIndex: 'name',
  },
  {
    title: 'Total',
    dataIndex: 'total',
  },
];
