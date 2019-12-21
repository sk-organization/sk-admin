import React from 'react';
import { Table, Avatar, Col, Row } from 'antd';
import { Cart, Product } from 'interfaces';
import { IMAGE_HOST } from 'constants/apollo';
import { totalQuantityFromVariations } from 'utils/general';

export const FranchiseTableConfig = [
  {
    title: 'Franchise Reffred ID',
    dataIndex: 'id',
    render: id => <div>#{id}</div>,
  },

  {
    title: 'Products',
    dataIndex: 'products',
    render: (cartItems: Cart[]) => {
      return (
        <div>
          <Table
            columns={[
              {
                title: 'Product Info',
                dataIndex: 'product',
                render: (product: Product) => {
                  return (
                    <div>
                      <Row>
                        <div>
                          Name: <strong>{product.name}</strong>
                        </div>
                        <Col span={12}>
                          <div>
                            Price: <strong>₹{product.price}</strong>
                          </div>
                          <div>
                            Sold By: <strong>{product.seller.shopName}</strong>
                          </div>
                          <div>
                            Seller Price:{' '}
                            <strong>₹{product.sellerPrice}</strong>
                          </div>
                          <div>
                            Category: <strong>{product.category.name}</strong>
                          </div>
                          <div>
                            SubCategory:{' '}
                            <strong>{product.subCategory.name}</strong>
                          </div>
                        </Col>
                        <Col span={12}>
                          <Avatar
                            alt="product_image"
                            size={100}
                            src={IMAGE_HOST + product.image}
                          />
                        </Col>
                      </Row>
                    </div>
                  );
                },
              },
              {
                title: 'Earning',
                dataIndex: 'earning',
                render: earning => {
                  return (
                    <div>
                      {earning.franchise === null ? (
                        <div>This product is not shared by this franchise</div>
                      ) : (
                        <div>
                          Franchise:{' '}
                          <strong>₹{earning.franchise.toFixed(2)}</strong>
                        </div>
                      )}
                      Admin: <strong>₹{earning.admin.toFixed(2)}</strong>
                    </div>
                  );
                },
              },
            ]}
            pagination={false}
            dataSource={cartItems.map(cart => {
              let franchiseAmount = null;

              if (cart.franchise) {
                franchiseAmount =
                  totalQuantityFromVariations(cart.selectedVariations) *
                  cart.product.price *
                  // @ts-ignore
                  (cart.product.subCategory.franchiseCommissionPercent / 100);
              }

              return {
                ...cart,
                earning: {
                  franchise: franchiseAmount,
                  admin:
                    totalQuantityFromVariations(cart.selectedVariations) *
                    cart.product.sellerPrice *
                    // @ts-ignore
                    (cart.product.subCategory.profitPercent / 100),
                },
              };
            })}
          />
        </div>
      );
    },
  },
  // {
  //   title: 'Row Total',
  //   dataIndex: 'franchiseTotal',
  //   render: (franchiseTotal: Cart[]) => {
  //     return (
  //       <div>
  //         Franchise Total:{' '}
  //         <strong>
  //           {franchiseTotal.map(franchise => {
  //             return (
  //               <div>
  //                 {(franchise.totalProducts *
  //                   //@ts-ignore
  //                   franchise.product.subCategory.franchiseCommissionPercent) /
  //                   100}
  //               </div>
  //             );
  //           })}
  //         </strong>
  //         Admin Total:{' '}
  //         <strong>
  //           {franchiseTotal.map(admin => {
  //             return (
  //               <div>
  //                 {(admin.totalProducts *
  //                   //@ts-ignore
  //                   admin.product.subCategory.profitPercent) /
  //                   100}
  //               </div>
  //             );
  //           })}
  //         </strong>
  //       </div>
  //     );
  //   },
  // },
];
