import React from 'react';

const ProductSellerInfo = ({ seller }) => {
  const { shopName, website, landlineNumber, bankDetails } = seller;
  const { bankName, accountNumber, IFSC_CODE } = bankDetails || {};

  return (
    <div>
      <h2>Seller Info</h2>
      <div>
        {shopName && (
          <div>
            Shop Name: <strong>{shopName}</strong>
          </div>
        )}
        {website && (
          <div>
            Website: <strong>{website}</strong>
          </div>
        )}
        {landlineNumber && (
          <div>
            Landline Number: <strong>{landlineNumber}</strong>
          </div>
        )}
        <br />
        {bankName && (
          <div>
            <h4>Bank Details</h4>
            Bank Name: <strong>{bankName}</strong>
          </div>
        )}
        {accountNumber && (
          <div>
            Account Number: <strong>{accountNumber}</strong>
          </div>
        )}
        {IFSC_CODE && (
          <div>
            IFSC CODE: <strong>{IFSC_CODE}</strong>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductSellerInfo;
