import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from 'constants/apollo';

export const sellersUserTableConfig = [
  {
    title: 'Image',
    dataIndex: 'user.image',
    key: 'image',
    render: (image: string) => <Avatar size={60} src={IMAGE_HOST + image} />,
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
    render: location => (
      <div>
        {location ? (
          <React.Fragment>
            <div>{location}</div>
          </React.Fragment>
        ) : (
          <div>
            <p>Not Available!</p>
          </div>
        )}
      </div>
    ),
  },
  {
    title: 'Shop Name',
    dataIndex: 'shopName',
    key: 'shopName',
    render: shop => (
      <div>
        {shop ? (
          <React.Fragment>
            <div>
              <p>{shop}</p>
            </div>
          </React.Fragment>
        ) : (
          <div>
            <p>Not Available</p>
          </div>
        )}
      </div>
    ),
  },
];
