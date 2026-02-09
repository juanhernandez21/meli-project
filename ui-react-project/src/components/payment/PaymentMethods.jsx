import React from 'react';

const PaymentMethods = () => (
  <div style={{
    border: '1px solid #eee',
    borderRadius: 8,
    padding: '1.5rem',
    background: '#fff'
  }}>
    <h3>Medios de pago</h3>
    <div style={{ marginBottom: '1rem' }}>
      <strong>Cuotas sin Tarjeta</strong>
      <div>
        <img src="https://www.mercadopago.com/org-img/MP3/MP3_logo.png" alt="Mercado Pago" style={{ height: 24, margin: '8px 0' }} />
      </div>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <strong>Tarjetas de crédito</strong>
      <div style={{ color: '#888', fontSize: '0.9rem' }}>¡Paga en hasta 6 cuotas!</div>
      <div style={{ display: 'flex', gap: '1rem', margin: '8px 0' }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="American Express" style={{ height: 24 }} />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" style={{ height: 24 }} />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" style={{ height: 24 }} />
      </div>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <strong>Tarjetas de débito</strong>
      <div style={{ display: 'flex', gap: '1rem', margin: '8px 0' }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa Débito" style={{ height: 24 }} />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard Débito" style={{ height: 24 }} />
      </div>
    </div>
    <a href="#" style={{ color: '#3483fa', textDecoration: 'none', fontWeight: 'bold' }}>
      Conoce otros medios de pago
    </a>
  </div>
);

export default PaymentMethods;