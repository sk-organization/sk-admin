import React from 'react';
import { Button, Table } from 'antd';
import { navigate } from '@reach/router';
import { adminsTableConfig } from 'config/Admins/adminsTableConfig';

interface Props {
  path: string;
}

const adminsMapped = [
  {
    sn: '1',
    image: 'someImage',
    personalInfo: {
      name: 'Cute Nibba',
      email: 'nibba@gmail.com',
      phone: '+977-9825648537',
    },

    address: {
      address: 'Traffic Chowk',
      zipCode: '273327',
      city: 'Butwal',
      country: 'Nepal',
    },
    adminTypes: 'Sub Admin',
    status: 'active',
    action: 'dfdf',
  },
];

const Admins: React.FC<Props> = props => {
  return (
    <div>
      <div style={{ textAlign: 'right', marginBottom: 10 }}>
        <Button type="primary" onClick={() => navigate('/admin/add-admins')}>
          Add Admins
        </Button>
      </div>
      <Table dataSource={adminsMapped} columns={adminsTableConfig} />
    </div>
  );
};

export default Admins;
