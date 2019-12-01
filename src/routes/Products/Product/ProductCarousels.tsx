import React from 'react';
import { Carousel } from 'antd';
import { IMAGE_HOST } from 'constants/apollo';

const ProductCarousels = ({ images }) => {
  const imageList = images.map(image => {
    return (
      <div>
        <div
          style={{
            height: '100%',
            width: '100%',
            backgroundImage: `url(${IMAGE_HOST + image})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backfaceVisibility: 'hidden',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p style={{ color: 'transparent' }}>.</p>
        </div>
      </div>
    );
  });

  return (
    // <Carousel effect="scrollx" autoplay autoplaySpeed={2000}>
    //   {/* {imageList} */}
    // </Carousel>
    <Carousel
      style={{
        textAlign: 'center',
        height: '160px',
        lineHeight: '160px',
        background: 'purple',
      }}
      effect="scrollx"
      autoplay
      autoplaySpeed={2000}
    >
      {imageList}
    </Carousel>
  );
};

export default ProductCarousels;
