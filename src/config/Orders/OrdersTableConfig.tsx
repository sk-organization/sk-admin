import React from 'react';
import { Tag } from 'antd';

const statusMapping = {
  PENDING: {
    color: 'orange',
    text: 'Pending',
  },
  CANCELLED: {
    color: 'red',
    text: 'Cancelled',
  },
  FAILED: {
    color: 'red',
    text: 'Failed',
  },
  RECEIVED: {
    color: '#87d068',
    text: 'Received',
  },
};

export const ordersTableConfig = [
  {
    title: 'Order Id',
    dataIndex: 'orderId',
  },
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
  },

  {
    title: 'Quantity',
    dataIndex: 'totalProducts',
  },
  {
    title: 'Subtotal',
    dataIndex: 'total',
    render: total => `₹${total}`,
  },
  {
    title: 'Order Date',
    dataIndex: 'orderDate',
  },

  {
    title: 'Status',
    dataIndex: 'status',
    filters: [
      { text: 'PENDING', value: 'PENDING' },
      { text: 'RECIEVED', value: 'RECEIVED' },
      { text: 'CANCELLED', value: 'CANCELLED' },
      { text: 'RETURNED', value: 'RETURNED' },
      { text: 'FAIL', value: 'FAILED' },
    ],
    filterMultiple: false,
    width: '15%',
    render: status => (
      <Tag color={statusMapping[status].color}>
        {statusMapping[status].text}
      </Tag>
    ),
  },
];
