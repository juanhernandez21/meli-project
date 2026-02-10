import React from 'react';
import ProductDetail from '../product/ProductDetail';
import ProductFeatures from '../product/ProductFeatures';
import ProductImages from '../product/ProductImages';
import ProductDescription from '../product/ProductDescription';
import ProductPurchaseBox from '../product/ProductPurchaseBox';
import SellerInfo from '../seller/SellerInfo';
import PaymentMethods from '../payment/PaymentMethods';

function MainLayout(props) {
  return (
    <>
      {props.productResponse.product && props.offerResponse.offer && (
        <div style={{
          display: 'flex',
          gap: '2rem',
          maxWidth: 1200,
          margin: '2rem auto',
          alignItems: 'flex-start'
        }}>
          <div style={{ flex: 2 }}>
            <ProductDetail product={props.productResponse.product} offer={props.offerResponse.offer} />
            <ProductFeatures product={props.productResponse.product} />
            <ProductImages product={props.productResponse.product}/>
            <ProductDescription product={props.productResponse.product} />
          </div>
          <div style={{ flex: 1 }}>
            <ProductPurchaseBox offer={props.offerResponse.offer} />
            <SellerInfo seller={props.offerResponse.offer.seller} />
            <PaymentMethods offer={props.offerResponse.offer} />
          </div>
        </div>
      )}
    </>
  );
}

export default MainLayout;