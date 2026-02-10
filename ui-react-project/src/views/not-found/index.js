import React from 'react';

const NotFound = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff'
  }}>
    <div style={{ textAlign: 'center' }}>
      <img
        src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.0.0/mercadolibre/404.svg"
        alt="Página no encontrada"
        style={{ width: 180, marginBottom: 24, opacity: 0.7 }}
        onError={e => { e.target.style.display = 'none'; }}
      />
      <div style={{ fontSize: 24, color: '#333', fontWeight: 500, marginTop: 16 }}>
        Parece que esta página no existe
      </div>
    </div>
  </div>
);

export default NotFound;