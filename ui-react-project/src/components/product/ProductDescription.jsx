import React from 'react';

function ProductDescription(props) {
    return (
        <div style={{ margin: '2rem 0' }}>
            <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #eee' }} />
            <h2 style={{ fontWeight: 500, fontSize: 22, marginBottom: 16 }}>Descripción</h2>
            <p style={{ fontSize: 16, color: '#444', lineHeight: 1.6 }}>
                {props.product.description}
            </p>
        </div>
    );
}

export default ProductDescription;