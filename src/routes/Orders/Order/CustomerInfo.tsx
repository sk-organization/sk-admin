import React from 'react';

const CustomerInfo = ({ customer }) => {
  return (
    <div>
      <h2>Account Information</h2>
      <h4>
        Customer Name: <strong>{customer.name}</strong>
      </h4>
      {customer.email && (
        <h4>
          Email: <strong>{customer.email}</strong>{' '}
        </h4>
      )}
      <h4>
        Phone: <strong>{customer.phone}</strong>{' '}
      </h4>
    </div>
  );
};

export default CustomerInfo;
