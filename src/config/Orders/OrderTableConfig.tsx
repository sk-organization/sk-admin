import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from 'constants/apollo';

export const orderProductTableConfig = [
  {
    title: 'Image',
    dataIndex: 'image',
    render: image => (
      <div className="imageHider">
        <Avatar shape="square" size={100} src={IMAGE_HOST + image} />
      </div>
    ),
  },

  {
    title: 'Product Info',
    dataIndex: 'generalInfo',
    render: orderProduct => {
      return (
        <div>
          <div>
            Name: <strong>{orderProduct.name}</strong>
          </div>
          <div>
            Price: <strong>₹{orderProduct.price}</strong>
          </div>
          <div>
            Seller Price: <strong>₹{orderProduct.sellerPrice}</strong>
          </div>
          <div>
            Discount Percent: <strong>{orderProduct.discountPercent}`%</strong>
          </div>
          <div>
            Category:{' '}
            <strong>{orderProduct.subCategory.replace('-', ' ')}</strong>
          </div>
          <div>
            Sold By: <strong>{orderProduct.shopName}</strong>{' '}
          </div>
        </div>
      );
    },
  },

  {
    title: 'Variation Info',
    dataIndex: 'selectedVariations',
    render: selectedVariations =>
      selectedVariations.map(selectedVariation => (
        <div
          style={{ marginBottom: 10, border: '1px solid green', padding: 5 }}
        >
          <div>
            Color: <strong>{selectedVariation.color}</strong>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            Sizes:
            {selectedVariation.sizes.map(size => {
              return (
                <div style={{ margin: '0 0 10px 10px' }}>
                  <div style={{ marginBottom: 5 }}>
                    <strong>
                      {size.name} ({size.quantity}),
                    </strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )),
  },

  {
    title: 'Qty',
    dataIndex: 'quantity',
  },

  // {
  //   title: 'Discounted Price',
  //   dataIndex: 'withDiscount',
  //   render: discount => `₹ ${discount}`,
  // },

  {
    title: 'Franchise Comission',
    dataIndex: 'franchiseComissionInfo',
    render: franchise => (
      <div>
        <div>Name: {franchise.name}</div>
        <div>Earn: ₹{franchise.comission}</div>
      </div>
    ),
  },

  {
    title: 'Admin Income',
    dataIndex: 'adminIncome',
  },

  {
    title: 'Row Total',
    dataIndex: 'subTotal',
    render: subTotal => `₹ ${Math.round(subTotal)}`,
  },
];
