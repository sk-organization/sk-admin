import React from 'react';
import { Table, Input } from 'antd';
import { useSellersQuery } from 'generated/Hooks';
import { sellersUserTableConfig } from 'config/Sellers/SellersTableConfig';
import { navigate } from '@reach/router';
import searchComponent from 'components/search';

interface Props {
  path: string;
}

const { Search } = Input;

const Sellers: React.FC<Props> = props => {
  const { loading, error, data, refetch } = useSellersQuery({
    variables: {
      where: {},
    },
  });

  if (error) return <div>Server Error...</div>;

  console.log(data);

  const { sellers = [] } = data || {};

  const handleSellersSearch = event => {
    refetch({
      where: { user: { name_contains: event.target.value } },
    });
  };

  return (
    <div>
      <Search
        style={searchComponent.search}
        onChange={handleSellersSearch}
        placeholder="Search Sellers"
        enterButton="Search"
      />

      <Table
        key="id"
        loading={loading}
        dataSource={sellers}
        columns={sellersUserTableConfig}
        onRowClick={seller => navigate(`/seller/${seller.id}`)}
      />
    </div>
  );
};

export default Sellers;
