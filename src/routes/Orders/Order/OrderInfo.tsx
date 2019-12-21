import React from 'react';

const OrderInfo = ({ order }) => {
  const { orderBy } = order;
  return (
    <div>
      <h2>Order Information</h2>
      <h4>
        Order Date: <strong>{new Date(order.createdAt).toDateString()}</strong>
      </h4>
      <h4>
        Payment Method: <strong>{order.paymentMethod}</strong>
      </h4>
      <h4>
        Order Status: <strong>{order.status}</strong>
      </h4>
      <h4>
        {orderBy.skMoney ? (
          <div>
            SK Money: <strong>{orderBy.skMoney}</strong>{' '}
          </div>
        ) : (
          ''
        )}
      </h4>
    </div>
  );
};

export default OrderInfo;
