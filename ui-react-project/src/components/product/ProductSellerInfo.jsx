import React from 'react';

const ProductSellerInfo = ({ seller }) => (
  <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
    <p>Vendido por <strong>{seller.name}</strong></p>
    <p>{seller.sales}</p>
    <p>Devolución gratis. Tienes 30 días desde que lo recibes.</p>
    <p>Compra Protegida. Recibe el producto que esperabas o te devolvemos tu dinero.</p>
  </div>
);

export default ProductSellerInfo;