import React from 'react';
import { Table, Input, Row, Col, Button } from 'antd';
import { useCategoriesQuery } from 'generated/Hooks';
import { categoriesTableConfig } from 'config/Categories/categoriesTableConfig';
import { navigate } from '@reach/router';

interface Props {
  path: string;
}

const { Search } = Input;

const Categories: React.FC<Props> = props => {
  const { loading, error, data, refetch } = useCategoriesQuery({
    variables: {
      where: {},
    },
  });

  if (error) return <div>Server Error..</div>;

  console.log(data);

  const { categories = [] } = data || {};

  const categoriesMapped = categories.map((category, index) => ({
    ...category,
    sn: index + 1,
    // quickActions: {
    //   label: category.name,
    //   key: category.id,
    // },
  }));

  const handleCategoriesSearch = event => {
    refetch({
      where: { name_contains: event.target.value },
    });
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <Search
            style={{ marginBottom: 15 }}
            autoComplete="on"
            placeholder="Search Category"
            enterButton="Search"
            onChange={handleCategoriesSearch}
          />
        </Col>
        <Col span={12}>
          <div style={{ textAlign: 'right' }}>
            <Button
              onClick={() => navigate('/categories/add-category')}
              type="primary"
            >
              Add New Categories
            </Button>
          </div>
        </Col>
      </Row>
      <Table
        key="id"
        loading={loading}
        dataSource={categoriesMapped}
        columns={categoriesTableConfig}
      />
    </div>
  );
};

export default Categories;
