import React from 'react';

const ProductActions = ({ price, installments }) => (
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ color: '#333' }}>${price.toLocaleString()}</h3>
    <p style={{ color: 'green' }}>{installments}</p>
    <button style={{ background: '#3483fa', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: 4, marginRight: 8 }}>
      Comprar ahora
    </button>
    <button style={{ background: '#e0e0e0', color: '#333', padding: '10px 20px', border: 'none', borderRadius: 4 }}>
      Agregar al carrito
    </button>
  </div>
);

export default ProductActions;