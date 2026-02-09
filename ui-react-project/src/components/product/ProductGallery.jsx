import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginTop: '1rem' }}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Miniatura ${idx + 1}`}
            style={{
              width: 50,
              height: 50,
              margin: '4px',
              border: selected === idx ? '2px solid blue' : '1px solid #ccc',
              cursor: 'pointer'
            }}
            onClick={() => setSelected(idx)}
          />
        ))}
      </div>
      <div style={{ display: 'flex', flex: 2, marginTop: '1rem' }}>
        <img src={images[selected]} alt="Producto" style={{ width: 300, height: 300, objectFit: 'cover' }} />
      </div>
    </div>
  );
};

export default ProductGallery;