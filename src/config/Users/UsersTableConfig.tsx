import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from 'constants/apollo';

export const usersTableConfig = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },

  {
    title: 'Image',
    dataIndex: 'image',
    render: image => (
      <div>
        <Avatar shape="circle" size={60} src={IMAGE_HOST + image} />
      </div>
    ),
  },

  {
    title: 'Personal Info',
    dataIndex: 'userInfo',
    render: user => (
      <div>
        {user.name && (
          <div>
            <strong>Name: </strong> {user.name}
          </div>
        )}

        {user.email && (
          <div>
            <strong>Email: </strong>
            {user.email}
          </div>
        )}

        {user.phone && (
          <div>
            <strong>Phone: </strong>
            {user.phone}
          </div>
        )}
      </div>
    ),
  },

  {
    title: 'Address',
    dataIndex: 'userLocationInfo',
    render: location => (
      <div>
        {location.address1 ||
          (location.address2 && (
            <div>
              <strong>Address: </strong>
              {`${location.address1 || ''},
          ${location.address2 || ''}`}
            </div>
          ))}
        {location.city && (
          <div>
            <strong>City: </strong>
            {location.city}
          </div>
        )}
        {location.zipCode && (
          <div>
            <strong>ZipCode: </strong>
            {location.zipCode}
          </div>
        )}
      </div>
    ),
  },
];
