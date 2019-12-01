import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { useState } from 'react';
import { Router, navigate } from '@reach/router';

import Products from 'routes/Products/Products';
import Product from 'routes/Products/Product/Product';
import Orders from 'routes/Orders/Orders';
import Order from 'routes/Orders/Order/Order';
import Categories from 'routes/Categories/Categories';
import SubCategories from 'routes/Categories/SubCategories/SubCategories';
import Customers from 'routes/Customers/Customers';
import Customer from 'routes/Customers/Customer/Customer';
import Sellers from 'routes/Sellers/Sellers';
import Seller from 'routes/Sellers/Seller/Seller';
// import Carousel from 'routes/Settings/Carousels/Carousels';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item onClick={() => navigate('/orders')}>
            <Icon type="gift" />
            <span>Orders</span>
          </Menu.Item>
          <Menu.Item onClick={() => navigate('/products')}>
            <Icon type="database" />
            <span>Products</span>
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <Icon type="appstore" />
                Categories
              </span>
            }
          >
            <Menu.Item onClick={() => navigate('/categories')}>
              <Icon type="appstore" />
              <span>Categories</span>
            </Menu.Item>
            <Menu.Item onClick={() => navigate('/subCategories')}>
              <Icon type="appstore" />
              <span>Sub Category</span>
            </Menu.Item>
          </SubMenu>
          <Menu.Item onClick={() => navigate('/sellers')}>
            <Icon type="user" />
            <span>Sellers </span>
          </Menu.Item>
          <Menu.Item onClick={() => navigate('/customers')}>
            <Icon type="user" />
            <span>Customers</span>
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <Icon type="setting" />
                Settings
              </span>
            }
          >
            <Menu.Item onClick={() => navigate('/carousel')}>
              <Icon type="settings" />
              <span>Carousel </span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: '100vh',
          }}
        >
          <Router>
            <Products path="/products" />
            <Product path="/product/:productId" />
            <Orders path="/orders" />
            <Order path="/order/:orderId" />
            <Categories path="/categories" />
            <SubCategories path="/subCategories" />
            <Customers path="/customers" />
            <Customer path="/customer/:customerId" />
            <Sellers path="/sellers" />
            <Seller path="/seller/:sellerId" />
            {/* <Carousel path="/carousel" /> */}
          </Router>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
