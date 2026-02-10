import React from 'react';

const Footer = () => (
  <footer style={{
    background: '#fff',
    color: '#333',
    fontSize: 13,
    padding: '2rem 0 1rem 0',
    borderTop: '1px solid #eee',
    marginTop: 40
  }}>
    <div style={{
      maxWidth: 1200,
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <nav style={{ marginBottom: 8 }}>
        <a href="#" style={{ margin: '0 10px', color: '#333', textDecoration: 'none' }}>Trabaja con nosotros</a>
        <a href="#" style={{ margin: '0 10px', color: '#333', textDecoration: 'none' }}>Términos y condiciones</a>
        <a href="#" style={{ margin: '0 10px', color: '#333', textDecoration: 'none' }}>Promociones</a>
        <a href="#" style={{ margin: '0 10px', color: '#333', textDecoration: 'none' }}>Cómo cuidamos tu privacidad</a>
        <a href="#" style={{ margin: '0 10px', color: '#333', textDecoration: 'none' }}>Accesibilidad</a>
        <a href="#" style={{ margin: '0 10px', color: '#333', textDecoration: 'none' }}>Ayuda</a>
        <a href="#" style={{ margin: '0 10px', color: '#333', textDecoration: 'none' }}>Cyber Day</a>
        <a href="#" style={{ margin: '0 10px', color: '#333', textDecoration: 'none' }}>Cyber Monday</a>
        <a href="#" style={{ margin: '0 10px', color: '#333', textDecoration: 'none' }}>Programa de Afiliados</a>
      </nav>
      <div style={{ color: '#888', marginBottom: 2 }}>
        Copyright © 1999-2026 MercadoLibre® Chile Ltda.
      </div>
      <div style={{ color: '#888' }}>
        Av. Apoquindo 4800, Torre 2, piso 21, Las Condes, Santiago - Chile.
      </div>
    </div>
  </footer>
);

export default Footer;