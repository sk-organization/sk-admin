import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from 'constants/apollo';

export const userStatusTableConfig = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },

  {
    title: 'Image',
    dataIndex: 'meta.image',
    render: image => (
      <div>
        <Avatar shape="circle" size={50} src={IMAGE_HOST + image} />
      </div>
    ),
  },

  {
    title: 'Name',
    dataIndex: 'meta.name',
  },

  {
    title: 'Price',
    dataIndex: 'meta.price',
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
    dataIndex: 'totalProduct',
  },

  {
    title: 'Sub Total',
    dataIndex: 'subTotal',
  },
];
