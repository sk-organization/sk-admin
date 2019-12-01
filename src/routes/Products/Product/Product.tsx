import React from 'react';
import { Row, Col } from 'antd';
import ProductInfo from './ProductInfo';
import { useProductQuery } from 'generated/Hooks';
import ProductCarousels from './ProductCarousels';
import ProductSellerInfo from './ProductSellerInfo';
import ProductVariationInfo from './ProductVariationInfo';

interface Props {
  path: string;
  productId?: string;
}

const Product: React.FC<Props> = props => {
  const { productId } = props;

  const { loading, error, data } = useProductQuery({
    variables: {
      productId,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Server Error...</div>;

  console.log(data.product);

  const { product } = data;

  return (
    <div>
      <div>
        <Row gutter={10}>
          <Col span={12}>
            <ProductInfo product={product} />
          </Col>
          <Col span={12}>
            <ProductCarousels images={product.images} />
          </Col>
        </Row>
      </div>

      <div>
        <Row gutter={10}>
          <Col span={12}>
            <ProductSellerInfo seller={product.seller} />
          </Col>
          <Col span={12}>
            <ProductVariationInfo variations={product.variations} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Product;
