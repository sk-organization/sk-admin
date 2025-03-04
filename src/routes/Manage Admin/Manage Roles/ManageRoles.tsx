import React from 'react';
import { Button, Table } from 'antd';
import { navigate } from '@reach/router';
import { manageRolesTableConfig } from 'config/Admins/manageRolesTableConfig';

interface Props {
  path: string;
}

const adminsRolesMapped = [
  {
    sn: '1',
    adminType: 'Sub Admin',
    date: {
      addedDate: '05-15-2019',
      modifiedDate: '05-502019',
    },
    status: 'Active',
    manageRoles: 'Manage Roles',
    actions: 'Actions',
  },
  {
    sn: '2',
    adminType: 'Data Entry',
    date: {
      addedDate: '05-15-2019',
      modifiedDate: '05-502019',
    },
    status: 'Active',
    manageRoles: 'Manage Roles',
    actions: 'Actions',
  },
];

const ManageRoles: React.FC<Props> = props => {
  return (
    <div>
      <div style={{ textAlign: 'right', marginBottom: 10 }}>
        <Button
          type="primary"
          onClick={() => navigate('/admin/add-admin-type')}
        >
          Add Admin Type
        </Button>
      </div>
      <Table dataSource={adminsRolesMapped} columns={manageRolesTableConfig} />
    </div>
  );
};

export default ManageRoles;
