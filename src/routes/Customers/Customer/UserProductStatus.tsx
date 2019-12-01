import React from 'react';
import { Table } from 'antd';
import { useCartsQuery } from 'generated/Hooks';
import { userStatusTableConfig } from 'config/Users/UserStatusTableConfig';

const UserProductStatus = ({ status, userId }) => {
  const { loading, error, data } = useCartsQuery({
    variables: {
      where: {
        status,
        orderBy: {
          id: userId,
        },
      },
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Server Error...</div>;

  console.log(data);

  const CartMapped = data.carts.map((cart, index) => {
    return {
      ...cart,
      sn: index + 1,
      subTotal: cart.total,
      totalProduct: cart.totalProducts,
      meta: {
        name: cart.product.name,
        image: cart.product.image,
        price: cart.product.price,
      },
    };
  });

  return (
    <div>
      <Table dataSource={CartMapped} columns={userStatusTableConfig} />
    </div>
  );
};

export default UserProductStatus;
