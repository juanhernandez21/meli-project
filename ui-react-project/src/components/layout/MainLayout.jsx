import React from 'react';
import RightColumn from './RightColumn';
import ProductDetail from '../product/ProductDetail';
import ProductFeatures from '../product/ProductFeatures';


function MainLayout(props) {
  return (
    <>
      <div style={{
        display: 'flex',
        gap: '2rem',
        maxWidth: 1200,
        margin: '2rem auto',
        alignItems: 'flex-start'
      }}>
        <div style={{ flex: 2 }}>
          <ProductDetail product={props.product} />
          <ProductFeatures />
        </div>
        <div style={{ flex: 1 }}>
          <RightColumn />
        </div>
      </div>
    </>
  );
}

export default MainLayout;