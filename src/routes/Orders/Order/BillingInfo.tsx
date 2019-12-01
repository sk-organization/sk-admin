import React from 'react';

const BillingInfo = ({ billing }) => {
  const { shippingAddress, orderBy } = billing;
  return (
    <div>
      <h2>Billing Address</h2>
      <div>{orderBy.name}</div>
      <div>
        {shippingAddress.address1}, {shippingAddress.address2}
      </div>
      <div>
        {shippingAddress.city}, {shippingAddress.zipCode}
      </div>
    </div>
  );
};

export default BillingInfo;
