import React from 'react';

function ProductPurchaseBox(props) {

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
          maxWidth: 350,
          marginBottom: 16
        }}>
      
          {
            offer.shipping.cost === 0 && offer.shipping.days === 0 &&(
              <>
                <div style={{ color: '#111', fontSize: 16, marginBottom: 4 }}>
                  <span style={{ color: '#00a650' }}>Llega gratis hoy </span> por ser tu primera compra
                </div>
    
                <div style={{ color: '#888', fontSize: 14, marginBottom: 4 }}>
                  Comprando en el <span style={{ color: '#ff6600' }}>próximo minuto</span>
                </div>
              </>
            )
          }

          <a href="#" style={{ color: '#3483fa', fontSize: 14, marginBottom: 12, display: 'inline-block' }}>
            Más detalles y formas de entrega
          </a>

          {
            offer.stock === 1 ? (
              <div style={{ fontWeight: 700, color: '#111', margin: '12px 0' }}>
                ¡Última disponible!
              </div>
            ) : (
              <div style={{ fontWeight: 700, color: '#111', margin: '12px 0' }}>
                Stock disponible: {offer.stock}
              </div>
            )
          }


          <button style={{
            background: '#3483fa',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '12px 0',
            width: '100%',
            fontWeight: 700,
            fontSize: 16,
            marginBottom: 8,
            cursor: 'pointer'
          }}>
            Comprar ahora
          </button>

          <button style={{
            background: '#eaf1fb',
            color: '#3483fa',
            border: 'none',
            borderRadius: 6,
            padding: '12px 0',
            width: '100%',
            fontWeight: 700,
            fontSize: 16,
            marginBottom: 16,
            cursor: 'pointer'
          }}>
            Agregar al carrito
          </button>

          <div style={{ fontSize: 14, color: '#888', marginBottom: 16 }}>
            Vendido por <span style={{ color: '#3483fa', fontWeight: 600 }}>{offer.seller.name}</span>
            <br />
            { offer.seller.isMercadoLider && offer.seller.sales > 1000 && (
              <>
                MercadoLíder | <b>+1000 ventas</b>
              </>
              )
            }
            
          </div>
          <div style={{ fontSize: 13, color: '#888', marginBottom: 16 }}>
            <a href="#" style={{ color: '#3483fa' }}>Devolución gratis.</a> Tienes 30 días desde que lo recibes.
          </div>
          <div style={{ fontSize: 13, color: '#888' }}>
            <a href="#" style={{ color: '#3483fa' }}>Compra Protegida.</a> Recibe el producto que esperabas o te devolvemos tu dinero.
          </div>
        </div>
      )}
    </>
  );
}


export default ProductPurchaseBox;