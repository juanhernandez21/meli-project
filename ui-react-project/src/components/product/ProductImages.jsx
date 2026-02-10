import React from 'react';

function ProductImages(props) {
  const { product } = props;
  return (
    <>
      {product.images && (
        <div style={{ margin: '2rem 0' }}>
          <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #eee' }} />
          <h2 style={{ fontWeight: 500, fontSize: 22, marginBottom: 16 }}>Imágenes del producto</h2>
          <div>
            {product.images.slice(0, 2).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Producto ${idx + 1}`}
                style={{
                  width: 400,
                  maxWidth: '100%',
                  marginBottom: 24,
                  display: 'block',
                  borderRadius: 8,
                  boxShadow: '0 2px 8px #eee'
                }}
              />
            ))}
          </div>
          <a href="#" style={{ color: '#3483fa', fontWeight: 500, fontSize: 15 }}>
            Ver más imágenes
          </a>
        </div>

      )}
    </>

  );
}

export default ProductImages;