import React from 'react';

const Header = () => (
  <header style={{
    background: '#ffe600',
    padding: '0.5rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 70
  }}>
    {/* Logo y ubicación */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <img
        src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.0.0/mercadolibre/logo__large_plus.png"
        alt="Mercado Libre"
        style={{ height: 40 }}
      />
      <div style={{ fontSize: 14, color: '#333', display: 'flex', alignItems: 'center', gap: 6 }}>
        <span role="img" aria-label="ubicación">📍</span>
        Ingresa tu ubicación
      </div>
    </div>
    {/* Buscador */}
    <div style={{ flex: 1, maxWidth: 500, margin: '0 2rem' }}>
      <input
        type="text"
        placeholder="Buscar productos, marcas y más..."
        style={{
          width: '100%',
          padding: '10px 16px',
          borderRadius: 6,
          border: '1px solid #ddd',
          fontSize: 16
        }}
      />
    </div>
    {/* Acciones y links */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <img
        src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.0.0/mercadolibre/medios__ml.png"
        alt="Más envíos"
        style={{ height: 32 }}
      />
      <nav style={{ display: 'flex', gap: 16 }}>
        <a href="#" style={{ color: '#333', fontWeight: 500, fontSize: 15 }}>Crea tu cuenta</a>
        <a href="#" style={{ color: '#333', fontWeight: 500, fontSize: 15 }}>Ingresa</a>
        <a href="#" style={{ color: '#333', fontWeight: 500, fontSize: 15 }}>Mis compras</a>
        <span role="img" aria-label="carrito" style={{ fontSize: 22 }}>🛒</span>
      </nav>
    </div>
  </header>
);

export default Header;