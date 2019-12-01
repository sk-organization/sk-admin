import React from 'react';
import { Table } from 'antd';

import { ordersTableConfig } from 'config/Orders/OrdersTableConfig';
import { useOrdersQuery } from 'generated/Hooks';
import { navigate } from '@reach/router';
import { OrderWhereInput } from 'interfaces';

interface Props {
  path?: string;
  where?: OrderWhereInput;
}

const Orders: React.FC<Props> = props => {
  const { error, loading, data } = useOrdersQuery({
    variables: {
      where: {},
    },
  });

  if (error) return <div>Server Error...</div>;

  console.log(data);

  const { orders = [] } = data || {};

  const ordersMapped = orders.map(order => {
    const { createdAt, orderBy } = order;
    const { name, image } = orderBy;

    const addDays = (date, days) => {
      date.setDate(date.getDate() + days);
      return date;
    };

    return {
      ...order,
      orderId: `#${order.id}`,
      actions: {
        id: order.id,
      },

      deliveryDate: addDays(new Date(order.createdAt), 6).toDateString(),
      image,
      customerName: name,
      orderDate: new Date(createdAt).toDateString(),
    };
  });

  return (
    <div>
      <Table
        rowKey="id"
        loading={loading}
        columns={ordersTableConfig}
        rowClassName={record => {
          if (record.adminSeen) {
            return '__seen';
          }
          return '__unseen';
        }}
        dataSource={ordersMapped}
        onRowClick={order => navigate(`/order/${order.id}`)}
      />
    </div>
  );
};

export default Orders;
