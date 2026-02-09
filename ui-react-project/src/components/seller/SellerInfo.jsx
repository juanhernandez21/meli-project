import React from 'react';

const SellerInfo = ({ seller }) => (
  <div style={{
    border: '1px solid #eee',
    borderRadius: 8,
    padding: '1.5rem',
    marginBottom: '1rem',
    background: '#fff'
  }}>
    <h3>Vendido por {seller.name}</h3>
    <p style={{ color: '#888' }}>+100 Productos</p>
    <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
      <div style={{ width: 120, height: 10, background: 'linear-gradient(to right, #fdd, #fee, #ff9, #dfd, #2ecc40)', borderRadius: 5 }} />
    </div>
    <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
      <div>
        <strong>+100</strong>
        <div style={{ fontSize: '0.9rem', color: '#888' }}>Ventas</div>
      </div>
      <div>
        <span role="img" aria-label="buena atención">💬</span>
        <div style={{ fontSize: '0.9rem', color: '#888' }}>Buena atención</div>
      </div>
      <div>
        <span role="img" aria-label="entrega a tiempo">⏰</span>
        <div style={{ fontSize: '0.9rem', color: '#888' }}>Entrega a tiempo</div>
      </div>
    </div>
    <button style={{
      background: '#eaf1fb',
      color: '#3483fa',
      border: 'none',
      borderRadius: 4,
      padding: '10px 20px',
      fontWeight: 'bold',
      cursor: 'pointer'
    }}>
      Ver más productos del vendedor
    </button>
  </div>
);

export default SellerInfo;