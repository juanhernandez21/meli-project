import React from 'react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';


function ProductDetail(props) {
  
  return (
    <>
      {props.product && (
        <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
          <ProductGallery images={props.product.images} />
          <div style={{ flex: 2 }}>
            <ProductInfo product={props.product} offer={props.offer} />
          </div>
        </div>
      )}  
    </>
  );
}

export default ProductDetail;