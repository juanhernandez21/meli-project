import React from 'react';
import ProductActions from '../product/ProductActions';
import ProductSellerInfo from '../product/ProductSellerInfo';
import SellerInfo from '../seller/SellerInfo';
import PaymentMethods from '../payment/PaymentMethods';

const product = {
  name: "Vinilo Pearl Jam Ten Sellado",
  price: 42800,
  installments: "6 cuotas de $7.133 sin interés",
  albumType: "Vinilo",
  images: [
    "https://via.placeholder.com/300?text=Pearl+Jam+1",
    "https://via.placeholder.com/300?text=Pearl+Jam+2",
    "https://via.placeholder.com/300?text=Pearl+Jam+3",
    "https://via.placeholder.com/300?text=Pearl+Jam+4",
    "https://via.placeholder.com/300?text=Pearl+Jam+5",
  ],
  description: [
    "Tipo de envase: Caja de plástico.",
    "Incluye pistas adicionales: No.",
    "Versión del álbum: Estándar.",
    "Vinilo Pearl Jam Ten Sellado, un álbum icónico del género Rock con 11 canciones, originario de Estados Unidos."
  ],
  seller: {
    name: "DISCORODANTE",
    sales: "+100 ventas"
  }
};

const RightColumn = () => (
  <div>
    <ProductActions price={product.price} installments={product.installments} />
    <ProductSellerInfo seller={product.seller} />
    <SellerInfo seller={product.seller} />
    <PaymentMethods />
  </div>
);

export default RightColumn;