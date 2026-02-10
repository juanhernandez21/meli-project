import React from 'react';

function ProductFeatures(props) {

  const { product } = props;

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

  return (
    <>
      {product && (
        <div style={{ margin: '2rem 0' }}>
          <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #eee' }} />
          <h2 style={{ fontWeight: 500, fontSize: 22, marginBottom: 16 }}>Características del producto</h2>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <FeatureTable title="Características principales" features={product.mainFeatures} />
            <FeatureTable title="Otros" features={product.otherFeatures} />
          </div>
        </div>
      )}
    </>
  );
}


export default ProductFeatures;