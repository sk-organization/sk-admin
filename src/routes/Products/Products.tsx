import React from 'react';
import { Table, Input, Row, Col } from 'antd';
import { productsTableConfig } from 'config/Products/ProductsTableConfig';
import { navigate } from '@reach/router';
import { useProductsQuery, ProductWhereInput } from 'generated/Hooks';
import searchComponent from 'components/search';

const { Search } = Input;

interface Props {
  path?: string;
  initialWhere?: ProductWhereInput;
}

const Products: React.FC<Props> = props => {
  const { loading, error, data, refetch } = useProductsQuery({
    variables: {
      term: '',
    },
  });

  if (error) return <div>Server Error...</div>;
  const { products = [] } = data || {};

  const productsMapped = products.map((product, index) => {
    return {
      ...product,
      sn: index + 1,
      image: product.variations[0].images[0],
      generalInfo: {
        name: product.name,
        sellerName: product.seller.user.name,
        category: product.category.name,
        sellerShopName: product.seller.shopName,
      },
      priceInfo: {
        price: product.price,
        sellerPrice: product.sellerPrice,
        discountPercent: product.discountPercent,
      },
    };
  });

  console.log(productsMapped);

  const handleProductsSearch = event => {
    console.log();
    refetch({
      term: event.target.value,
    });
  };

  return (
    <div>
      <div>
        <Row>
          <Col span={12}>
            <Search
              style={searchComponent.search}
              placeholder="Search Products By Name"
              enterButton="Search"
              onChange={handleProductsSearch}
            />
          </Col>
          <Col span={12}>
            {/* <React.Fragment>
              <Field
                name="status"
                placeholder="select status"
                options={status}
                component={SelectInput}
              />
            </React.Fragment> */}
          </Col>
        </Row>
      </div>
      <Table
        rowKey="id"
        loading={loading}
        columns={productsTableConfig}
        onRowClick={product => navigate(`/product/${product.id}`)}
        dataSource={productsMapped}
      />
    </div>
  );
};

export default Products;
