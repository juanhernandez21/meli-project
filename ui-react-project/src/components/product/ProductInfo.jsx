import React from 'react';

// # TODO: pasar a funcional component

function ProductInfo(props) {
  const { product, offer } = props;
  return (
    <>
      {product && offer && (
        <div>
          <div style={{ color: '#888', fontSize: 14, marginBottom: 4 }}>
            {product.condition} | {offer.sales}
          </div>
          <h1 style={{ fontSize: 24, margin: '0 0 8px 0' }}>
            {product.name}
          </h1>
          <div style={{ color: '#888', fontWeight: 600, fontSize: 16, marginBottom: 8 }}>
            {product.rating} <span style={{ color: '#3483fa' }}>★★★★★</span> (70)
          </div>
          <div style={{ fontSize: 32, fontWeight: 400, margin: '8px 0' }}>
            ${offer.price.toLocaleString()}
          </div>
          <div style={{ color: '#00a650', fontWeight: 500, marginBottom: 4 }}>
            ${offer.payment.installments}
          </div>
          <a href="#" style={{ color: '#3483fa', fontSize: 14, marginBottom: 12, display: 'inline-block' }}>
            Ver los medios de pago
          </a>
          <div style={{ margin: '16px 0' }}>
            <span style={{ fontWeight: 500 }}>Tipo de álbum: </span>
            <span style={{ fontWeight: 700 }}>{product.productType}</span>
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <button style={{
              border: '1px solid #ccc',
              background: '#fff',
              borderRadius: 6,
              padding: '6px 18px',
              fontWeight: 500,
              color: '#333'
            }}>CD</button>
            <button style={{
              border: '2px solid #3483fa',
              background: '#fff',
              borderRadius: 6,
              padding: '6px 18px',
              fontWeight: 700,
              color: '#3483fa'
            }}>Vinilo</button>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Lo que tienes que saber de este producto</div>
            <ul>
              {product.highlightedFeatures.map((desc, idx) => <li key={idx}>{desc}</li>)}
            </ul>
          </div>
        </div>
      )}

    </>
  );
}

export default ProductInfo;