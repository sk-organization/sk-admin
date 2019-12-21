import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Icon } from 'antd';
import { navigate, Router } from '@reach/router';

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
import Dashboard from 'routes/Dashboard/Dashboard';
import PrivacyPolicy from 'routes/PrivacyPolicy/PrivacyPolicy';
import TermAndCondition from 'routes/PrivacyPolicy/TermAndCondition';
import Admins from 'routes/Manage Admin/Admins/Admins';
import ManageRoles from 'routes/Manage Admin/Manage Roles/ManageRoles';
import AddAdminType from 'routes/Manage Admin/Manage Roles/AddAdminType/AddAdminType';
import Notifications from 'routes/Notifications/Notifications';
import AddCategory from 'routes/Categories/AddCategory/AddCategory';
import AddSubCategory from 'routes/Categories/SubCategories/AddSubCategory/AddSubCategory';
import Carousels from 'routes/Settings/Carousels/Carousel';
import AdminFranchiseAreas from 'routes/AdminFranchise/AdminFranchiseAreas/AdminFranchiseAreas';
import AdminFranchiseArea from 'routes/AdminFranchise/AdminFranchiseAreas/AdminFranchiseArea/AdminFranchiseArea';
import Franchise from 'routes/AdminFranchise/AdminFranchiseAreas/AdminFranchiseArea/Franchise/Franchise';

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
        <div className="siderLogo">
          <a href="/">
            <img
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
          </a>
          <h1>Dashboard</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item onClick={() => navigate('/dashboard')}>
            <Icon type="dashboard" />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item onClick={() => navigate('/orders')}>
            <Icon type="gift" />
            <span>Orders</span>
          </Menu.Item>
          <Menu.Item onClick={() => navigate('/products')}>
            <Icon type="shopping" />
            <span>Products</span>
          </Menu.Item>
          <SubMenu
            key="categories"
            title={
              <span>
                <Icon type="branches" />
                <span>Categories</span>
              </span>
            }
          >
            <Menu.Item onClick={() => navigate('/categories')}>
              <Icon type="frown" />
              <span>Categories</span>
            </Menu.Item>
            <Menu.Item onClick={() => navigate('/subCategories')}>
              <Icon type="frown" />
              <span>Sub Category</span>
            </Menu.Item>
          </SubMenu>
          <Menu.Item onClick={() => navigate('/notifications')}>
            <Icon type="bell" />
            <span>Notification </span>
          </Menu.Item>
          <Menu.Item onClick={() => navigate('/sellers')}>
            <Icon type="team" />
            <span>Sellers </span>
          </Menu.Item>
          <Menu.Item onClick={() => navigate('/admin-franchises')}>
            <Icon type="apartment" />
            <span>Franchise Areas</span>
          </Menu.Item>
          <Menu.Item onClick={() => navigate('/customers')}>
            <Icon type="user" />
            <span>Customers</span>
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <Icon type="bar-chart" />
                <span>Analytics</span>
              </span>
            }
          >
            <Menu.Item onClick={() => navigate('/analytics-reports/overview')}>
              <Icon type="frown" />
              <span>Overview</span>
            </Menu.Item>

            <Menu.Item
              onClick={() => navigate('/analytics-reports/real-time-reports')}
            >
              <Icon type="frown" />
              <span>Real Time</span>
            </Menu.Item>
            <Menu.Item onClick={() => navigate('/analytics-reports/orders')}>
              <Icon type="frown" />
              <span>Orders</span>
            </Menu.Item>
            <Menu.Item onClick={() => navigate('/analytics-reports/customers')}>
              <Icon type="frown" />
              <span>Customers</span>
            </Menu.Item>
            <Menu.Item onClick={() => navigate('/analytics-reports/purchase')}>
              <Icon type="frown" />
              <span>Purchase Funnel</span>
            </Menu.Item>
            <Menu.Item onClick={() => navigate('/analytics-reports/search')}>
              <Icon type="frown" />
              <span>Search</span>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            title={
              <span>
                <Icon type="file-done" />
                <span>Privacy Policy</span>
              </span>
            }
          >
            <Menu.Item onClick={() => navigate('/term-condition')}>
              <Icon type="frown" />
              <span>Term & Conditions</span>
            </Menu.Item>

            <Menu.Item onClick={() => navigate('/privacy-policy')}>
              <Icon type="frown" />
              <span>Privacy Policy</span>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="setting"
            title={
              <span>
                <Icon type="setting" />
                <span>Settings</span>
              </span>
            }
          >
            <Menu.Item onClick={() => navigate('/carousel')}>
              <Icon type="frown" />
              <span>Carousel </span>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            title={
              <span>
                <Icon type="usergroup-add" />
                <span>Manage Admins</span>
              </span>
            }
          >
            <Menu.Item onClick={() => navigate('/admin/admins')}>
              <Icon type="frown" />
              <span>Admins</span>
            </Menu.Item>
            <Menu.Item onClick={() => navigate('/admin/manage-roles')}>
              <Icon type="frown" />
              <span>Manage Roles</span>
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
            <Dashboard path="/dashboard" />
            <Products path="/products" />
            <Product path="/product/:productId" />
            <Orders path="/orders" />
            <Order path="/order/:orderId" />
            <Categories path="/categories" />
            <AddCategory path="/categories/add-category" />
            <AddSubCategory path="/subCategory/add-subCategory" />
            <SubCategories path="/subCategories" />
            <Customers path="/customers" />
            <Customer path="/customer/:customerId" />
            <Notifications path="/notifications" />
            <AdminFranchiseAreas path="/admin-franchises" />
            <AdminFranchiseArea path="/franchises-areas/franchises/:franchisesId" />
            <Franchise path="/franchises/franchise/:franchiseId" />
            <Sellers path="/sellers" />
            <Seller path="/seller/:sellerId" />
            <PrivacyPolicy path="/privacy-policy" />
            <TermAndCondition path="term-condition" />
            <Admins path="admin/admins" />
            <ManageRoles path="/admin/manage-roles" />
            <AddAdminType path="admin/add-admin-type" />
            <Carousels path="/carousel" />
          </Router>
        </Content>
        <footer>
          <h3
            style={{
              color: 'rgba(0,0,0,.45)',
              fontSize: '14px',
              textAlign: 'center',
              marginTop: 20,
              marginBottom: 50,
            }}
          >
            <div>* SK Shopping Admin *</div>
            <p>Version1.0</p>
          </h3>
        </footer>
      </Layout>
    </Layout>
  );
};

export default App;
