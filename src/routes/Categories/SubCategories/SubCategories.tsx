import React from 'react';
import { useSubCategoriesQuery } from 'generated/Hooks';
import { Table, Row, Col, Button, Input } from 'antd';
import { subCategoriesTableConfig } from 'config/SubCategories/subCategoriesTableConfig';
import { navigate } from '@reach/router';

interface Props {
  path: string;
}

const { Search } = Input;

const SubCategories: React.FC<Props> = props => {
  const { loading, error, data, refetch } = useSubCategoriesQuery();

  if (error) return <div>Server Error...</div>;

  console.log(data);

  const { subCategories = [] } = data || {};

  const subCategoriesMapped = subCategories.map((subCategory, index) => {
    return {
      ...subCategory,
      sn: index + 1,
    };
  });

  const handleSubCategoriesSearch = event => {
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
            placeholder="Search subCategory"
            enterButton="Search"
            onChange={handleSubCategoriesSearch}
          />
        </Col>
        <Col span={12}>
          <div style={{ textAlign: 'right' }}>
            <Button
              onClick={() => navigate('/subCategory/add-subCategory')}
              type="primary"
            >
              Add SubCategories
            </Button>
          </div>
        </Col>
      </Row>
      <Table
        key="id"
        dataSource={subCategoriesMapped}
        loading={loading}
        columns={subCategoriesTableConfig}
      />
    </div>
  );
};

export default SubCategories;
