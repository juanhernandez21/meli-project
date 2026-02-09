import React from 'react';

const mainFeatures = [
  { label: "Nombre del artista del album", value: "Pearl Jam" },
  { label: "Nombre del álbum", value: "Ten" },
  { label: "Compañía productora", value: "Sony Music" },
  { label: "Formato", value: "Físico" },
  { label: "Tipo de álbum", value: "Vinilo" },
  { label: "Versión del álbum", value: "Estándar" },
  { label: "Incluye pistas adicionales", value: "No" },
  { label: "Tipo de envase", value: "Caja de plástico" }
];

const otherFeatures = [
  { label: "Duración total del álbum", value: "1 h" },
  { label: "Cantidad de canciones", value: "11" },
  { label: "Origen", value: "Estados Unidos" },
  { label: "Género", value: "Rock" },
  { label: "Cantidad de piezas", value: "1" },
  { label: "Accesorios incluidos", value: "No" }
];

const FeatureTable = ({ title, features }) => (
  <div style={{
    background: '#fff',
    borderRadius: 8,
    boxShadow: '0 1px 4px #eee',
    marginBottom: '1rem',
    minWidth: 300,
    maxWidth: 350
  }}>
    <div style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: '1rem' }}>{title}</div>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        {features.map((f, idx) => (
          <tr key={idx} style={{ background: idx % 2 === 0 ? '#f3f3f3' : '#fff' }}>
            <td style={{ fontWeight: 'bold', padding: '8px 12px' }}>{f.label}</td>
            <td style={{ padding: '8px 12px' }}>{f.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ProductFeatures = () => (
  <div style={{ margin: '2rem 0' }}>
    <h2>Características del producto</h2>
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <FeatureTable title="Características principales" features={mainFeatures} />
      <FeatureTable title="Otros" features={otherFeatures} />
    </div>
  </div>
);

export default ProductFeatures;