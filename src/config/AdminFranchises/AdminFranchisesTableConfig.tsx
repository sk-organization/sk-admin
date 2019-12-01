import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from 'constants/apollo';

export const adminFranchisesTableConfig = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },
  {
    title: 'Image',
    dataIndex: 'adminFranchiseImage',
    render: image => (
      <div style={{ marginTop: 5 }}>
        <Avatar shape="circle" size={60} src={IMAGE_HOST + image} />
      </div>
    ),
  },
  {
    title: 'Basic Info',
    dataIndex: 'adminFranchiseName',
  },
  {
    title: 'Location Info',
    dataIndex: 'adminFranchiseCity',
  },
  {
    title: 'Total Sold',
    dataIndex: 'totalFranchisesCount',
  },
];
