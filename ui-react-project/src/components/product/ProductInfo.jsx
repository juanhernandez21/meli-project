import React from 'react';

const ProductInfo = ({ product }) => (
  <div>
    <h2>{product.name}</h2>
    <p><strong>Tipo de álbum:</strong> {product.albumType}</p>
    <div>
      <ul>
        {product.description.map((desc, idx) => <li key={idx}>{desc}</li>)}
      </ul>
    </div>
  </div>
);

export default ProductInfo;