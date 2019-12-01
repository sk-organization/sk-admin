import React from 'react';

const ShippingInfo = ({ shipping }) => {
  const { shippingAddress, orderBy } = shipping;
  return (
    <div>
      <h2>Shipping Address</h2>
      <div>{orderBy.name}</div>
      <div>
        {shippingAddress.address1}, {shippingAddress.address2}{' '}
      </div>
      <div>
        {shippingAddress.city}, {shippingAddress.zipCode}
      </div>
    </div>
  );
};

export default ShippingInfo;
