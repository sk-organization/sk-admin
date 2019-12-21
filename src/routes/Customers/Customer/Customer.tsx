import React from 'react';
import { Row, Col, Avatar, Tabs, Icon } from 'antd';
import { useUserQuery } from 'generated/Hooks';
import { IMAGE_HOST } from 'constants/apollo';
import Orders from 'routes/Orders/Orders';
import UserProductStatus from './UserProductStatus';

interface Props {
  path: string;
  customerId?: string;
}

const { TabPane } = Tabs;

const Comp = (props: { type: any; text: any }) => {
  const { type, text } = props;
  return (
    <span>
      <Icon type={type} />
      {text}
    </span>
  );
};

const Info = ({ label, value }) => (
  <div>
    {label}: <strong>{value}</strong>
  </div>
);

const Customer: React.FC<Props> = props => {
  const { loading, error, data } = useUserQuery({
    variables: {
      userId: props.customerId,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Server Error...</div>;

  console.log(data);

  const { user } = data;

  const { id: userId, name, email, country, phone, gender } = user;
  let { location } = user;
  if (!location) location = {};

  return (
    <div>
      <Row gutter={10}>
        <Col span={6}>
          <h3>User Info</h3>
          <Info label="Name" value={name} />
          <Info label="Email" value={email} />
          <Info label="Phone" value={phone} />

          {user.country && <Info label="Country" value={country} />}

          <Info label="Gender" value={gender} />
          <br />

          {Object.keys(location)[0] && <h3>Location Info</h3>}

          {location.city && <Info label="City" value={location.city} />}

          {location.address1 && (
            <Info label="Address1" value={location.address1} />
          )}

          {location.address2 && (
            <Info label="address2" value={location.address2} />
          )}

          {location.zipCode && (
            <Info label="zipCode" value={location.zipCode} />
          )}
        </Col>

        <Col span={6}>
          <Avatar shape="circle" size={150} src={IMAGE_HOST + user.image} />
        </Col>
        <Col span={12}>Graph Area!!</Col>
      </Row>
      <br />
      <Tabs defaultActiveKey="1" size="large">
        <TabPane tab={<Comp type="shopping" text="Orders" />} key="1">
          <Orders where={{ orderBy: { id: user.id } }} />
        </TabPane>
        <TabPane tab={<Comp type="shopping-cart" text="Cart" />} key="2">
          <UserProductStatus status="CART" userId={userId} />
        </TabPane>
        <TabPane tab={<Comp type="heart" text="WishList" />} key="3">
          <UserProductStatus status="WISHLIST" userId={userId} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Customer;
