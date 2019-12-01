import React from 'react';
import { Table, Input } from 'antd';
import { useUsersQuery } from 'generated/Hooks';
import { usersTableConfig } from 'config/Users/UsersTableConfig';
import { navigate } from '@reach/router';
import searchComponent from 'components/search';

interface Props {
  path: string;
}

const { Search } = Input;

const Customers: React.FC<Props> = props => {
  const { loading, error, data, refetch } = useUsersQuery({
    variables: {
      where: {},
    },
  });

  if (error) return <div>Server Error...</div>;

  console.log(data);

  const { users = [] } = data || {};

  const usersMapped = users.map((user, index) => {
    return {
      ...user,
      sn: index + 1,
      userInfo: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        country: user.country,
      },
      userLocationInfo: {
        address1: user.location && user.location.address1,
        address2: user.location && user.location.address2,
        city: user.location && user.location.city,
        zipCode: user.location && user.location.zipCode,
      },
    };
  });

  const handleCustomersSearch = event => {
    refetch({
      where: { name_contains: event.target.value },
    });
  };

  return (
    <div>
      <Search
        style={searchComponent.search}
        onChange={handleCustomersSearch}
        placeholder="input search text"
        enterButton="Search"
      />

      <Table
        key="id"
        loading={loading}
        columns={usersTableConfig}
        dataSource={usersMapped}
        onRowClick={customer => navigate(`/customer/${customer.id}`)}
      />
    </div>
  );
};

export default Customers;
