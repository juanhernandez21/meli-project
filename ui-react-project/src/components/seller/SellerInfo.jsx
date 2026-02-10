import React, { useEffect } from "react";
import { getSeller } from "./../../utils";

function SellerInfo(props) {

  const [seller, setSeller] = React.useState({});

  useEffect(() => {
    getSeller(props.seller.id)
      .then((response) => {
        setSeller(response);
      })
      .catch((error) => {
        console.error(`Ha ocurrido un error: ${JSON.stringify(error)}`);
      });
  }, [props]);

  return (
    <>
      {seller.seller && (
        <div style={{
          border: '1px solid #eee',
          borderRadius: 12,
          padding: '1.5rem',
          background: '#fff',
          maxWidth: 350,
          fontFamily: 'inherit',
          marginBottom: 16
        }}>
          <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>
            Vendido por {seller.seller.name}
          </div>
          <div style={{ color: '#888', fontWeight: 500, marginBottom: 8 }}>
            +{seller.seller.products} Productos
          </div>
          {seller.seller.isMercadoLider && (
            <div style={{ color: '#00a650', fontWeight: 600, marginBottom: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 20 }}>🏅</span>
              MercadoLíder Platinum
            </div>
          )}
          {seller.seller.isMercadoLider && (
            <div style={{ color: '#00a650', fontSize: 14, marginBottom: 8 }}>
              ¡Uno de los mejores del sitio!
            </div>
          )}
          <div style={{ display: 'flex', gap: 2, margin: '10px 0 16px 0' }}>
            <div style={{ width: 32, height: 6, background: '#fdd', borderRadius: 3 }} />
            <div style={{ width: 32, height: 6, background: '#fee', borderRadius: 3 }} />
            <div style={{ width: 32, height: 6, background: '#ff9', borderRadius: 3 }} />
            <div style={{ width: 32, height: 6, background: '#dfd', borderRadius: 3 }} />
            <div style={{ width: 32, height: 6, background: '#00a650', borderRadius: 3 }} />
          </div>
          <div style={{ display: 'flex', gap: 32, marginBottom: 16 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>+{seller.seller.products}</div>
              <div style={{ color: '#888', fontSize: 13 }}>Ventas</div>
            </div>
            <div>
              <span role="img" aria-label="buena atención" style={{ color: '#00a650', fontSize: 18 }}>💬</span>
              <div style={{ color: '#888', fontSize: 13 }}>Buena atención</div>
            </div>
            <div>
              <span role="img" aria-label="entrega a tiempo" style={{ color: '#00a650', fontSize: 18 }}>⏰</span>
              <div style={{ color: '#888', fontSize: 13 }}>Entrega a tiempo</div>
            </div>
          </div>
          <button style={{
            background: '#eaf1fb',
            color: '#3483fa',
            border: 'none',
            borderRadius: 6,
            padding: '12px 0',
            width: '100%',
            fontWeight: 700,
            fontSize: 16,
            cursor: 'pointer'
          }}>
            Ver más productos del vendedor
          </button>
        </div>
      )}
    </>
  );
}

export default SellerInfo;