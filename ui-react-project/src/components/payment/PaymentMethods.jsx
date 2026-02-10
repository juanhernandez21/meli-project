import React from 'react';


function PaymentMethods(props) {

  const { offer } = props;

  return (
    <>
      {offer && (
        <div style={{
          border: '1px solid #eee',
          borderRadius: 8,
          padding: '1.5rem',
          background: '#fff',
          minWidth: 320,
          maxWidth: 350
        }}>
          <h3>Medios de pago</h3>

          {offer.payment.paymentMethods.some(method => method === "mercado_pago") && (
            <div style={{ marginBottom: '1rem' }}>
              <strong>Cuotas sin Tarjeta</strong>
              <div>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/f3e8e940-f549-11ef-bad6-e9962bcd76e5-m.svg" alt="Mercado Pago" style={{ height: 24, margin: '8px 0' }} />
              </div>
            </div>
          )}

          {offer.payment.paymentMethods.some(method => method === "credit_card") && (
            <div style={{ marginBottom: '2rem' }}>
              <strong>Tarjetas de crédito</strong>
              <div style={{ color: '#888', fontSize: '0.9rem' }}>¡Paga en hasta 6 cuotas!</div>
              <div style={{ display: 'flex', gap: '1rem', margin: '8px 0' }}>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg" alt="American Express" style={{ height: 24 }} />
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="Visa" style={{ height: 24 }} />
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/9cf818e0-723a-11f0-a459-cf21d0937aeb-m.svg" alt="Mastercard" style={{ height: 24 }} />
              </div>
            </div>
          )}
          
          {offer.payment.paymentMethods.some(method => method === "credit_card") && (
            <div style={{ marginBottom: '2rem' }}>
              <strong>Tarjetas de débito</strong>
              <div style={{ display: 'flex', gap: '1rem', margin: '8px 0' }}>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg" alt="Visa Débito" style={{ height: 24 }} />
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg" alt="Mastercard Débito" style={{ height: 24 }} />
              </div>
            </div>
          )}

          <a href="#" style={{ color: '#3483fa', textDecoration: 'none', fontWeight: 'bold' }}>
            Conoce otros medios de pago
          </a>
        </div>
      )}
    </>
  );
}

export default PaymentMethods;