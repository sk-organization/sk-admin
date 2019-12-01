import React from 'react';
import { differenceInCalendarDays } from 'date-fns';
import { Table, Row, Col, Steps, Tabs, Avatar, Button } from 'antd';
import { orderProductTableConfig } from 'config/Orders/OrderTableConfig';
import { useOrderQuery } from 'generated/Hooks';

import text from './styles/text';
import { IMAGE_HOST } from 'constants/apollo';
import OrderInfo from './OrderInfo';
import CustomerInfo from './CustomerInfo';
import BillingInfo from './BillingInfo';
import ShippingInfo from './ShippingInfo';

interface Props {
  path: string;
  orderId?: string;
}

const { Step } = Steps;
const { TabPane } = Tabs;

const shipmentsData = [
  {
    snumber: '10000023',
    date: 'Nov 22, 2019 10:44:20',
    tnumber: '#123',
    actions: 'view actions',
  },
];

const inovicesData = [
  {
    invoicenumber: '10300006',
    date: '22-11-2019',
    amount: '$4500.00',
    actions: ' Print ',
  },
];

const shipmentsColumns = [
  {
    title: 'Shipping Number',
    dataIndex: 'snumber',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Tracking Number',
    dataIndex: 'tnumber',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
  },
];

const invoicesColumns = [
  {
    title: 'Invoice Number',
    dataIndex: 'invoicenumber',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    render: actions => (
      <div>
        <Button onClick={() => window.print()} type="primary">
          Print
        </Button>
      </div>
    ),
  },
];

const Order: React.FC<Props> = props => {
  const { loading, error, data } = useOrderQuery({
    variables: {
      orderId: props.orderId,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Server Error...</div>;

  console.log(data.order);

  const { order } = data;

  const orderProductsMapped =
    data.order.products &&
    data.order.products.map((orderProduct, index) => {
      const { selectedVariations } = orderProduct;
      const { quantity } = selectedVariations.reduce(
        (acc, a) => ({
          quantity:
            acc.quantity +
            a.sizes.reduce(
              (acc, size) => ({ quantity: size.quantity + acc.quantity }),
              {
                quantity: 0,
              },
            ).quantity,
          sizes: a.sizes,
        }),
        { quantity: 0, sizes: [] },
      );

      return {
        ...orderProduct,
        quantity,
        adminIncome:
          quantity *
          orderProduct.product.sellerPrice *
          (orderProduct.product.subCategory.profitPercent / 100),
        franchiseComissionInfo: {
          comission:
            quantity *
            orderProduct.product.price *
            (orderProduct.product.subCategory.franchiseCommissionPercent / 100),
          // name: orderProduct.franchise.user.name,
        },
        image: orderProduct.product.variations[0].images[0],
        subTotal: quantity * orderProduct.product.price,
        generalInfo: {
          price: orderProduct.product.price,
          sellerPrice: orderProduct.product.sellerPrice,
          subCategory: orderProduct.product.subCategory.name,
          shopName: orderProduct.product.seller.shopName,
          name: orderProduct.product.name,
          discountPercent: orderProduct.product.discountPercent,
        },
      };
    });

  let step = 0;
  const diffDay = differenceInCalendarDays(
    new Date(order.createdAt),
    new Date(),
  );
  if (diffDay === -1) {
    step = 1;
  } else if (diffDay < -1) {
    step = 2;
  }

  if (order.status === 'RECEIVED') {
    step = 3;
  }

  const TabsContent = (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="Information" key="1">
          <Row>
            <Col span={12}>
              <BillingInfo billing={order} />
            </Col>
            <Col span={12}>
              <ShippingInfo shipping={order} />
            </Col>
          </Row>
          <br />
          <br />
          <h2>Ordered Items</h2>
          <Table
            key="id"
            dataSource={orderProductsMapped}
            columns={orderProductTableConfig}
            pagination={false}
          />
          <div>
            <Row>
              <Col span={12} />
              <Col
                span={12}
                style={{ textAlign: 'right', marginTop: 20, padding: 10 }}
              >
                <div>
                  Sub Total: <strong>₹ {order.total}</strong>
                </div>
                <div>
                  VAT (13%):
                  <strong>{order.total + order.total * (13 / 100)}</strong>
                </div>
                <div style={{ fontSize: 17, marginTop: 8 }}>
                  Grand Total:{' '}
                  <strong>₹ {order.total + order.total * (13 / 100)}</strong>
                </div>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane tab="Shipments" key="2">
          <h2>Shipments</h2>
          <Table
            pagination={false}
            columns={shipmentsColumns}
            dataSource={shipmentsData}
          />
        </TabPane>
        <TabPane tab="Invoices" key="3">
          <h2>Invoices</h2>
          <Table
            pagination={false}
            columns={invoicesColumns}
            dataSource={inovicesData}
          />
        </TabPane>
      </Tabs>
    </div>
  );

  return (
    <div>
      <div>
        <Row>
          <Col>
            <div style={{ backgroundColor: '#F2F2F2', padding: 20 }}>
              <h2 style={{ textAlign: 'center' }}>Order #{order.id}</h2>
              <Row gutter={40}>
                <Col span={9}>
                  <OrderInfo order={order} />
                </Col>
                <Col span={9}>
                  <CustomerInfo customer={order.orderBy} />
                </Col>
                <Col span={6}>
                  <Avatar
                    alt="customer_image"
                    size={120}
                    src={IMAGE_HOST + order.orderBy.image}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <div>{TabsContent}</div>
      </div>

      <div style={text.mb10} className="progress">
        <Steps size="small" progressDot current={step}>
          <Step
            title="Order And Approved"
            description={new Date(order.createdAt).toDateString()}
          />
          <Step title="Packed" description="Sun 17-Sep-2019" />
          <Step title="Shipped" description="Tue 19-Sep-2019" />
          <Step
            title="Deliver"
            description="Expected by Wed, 21st-Sep-2019 shipment yet to be deliver"
          />
        </Steps>
      </div>
    </div>
  );
};

export default Order;
