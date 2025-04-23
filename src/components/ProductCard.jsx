import React from 'react';
import RatingWidget from './RatingWidget';
import PropTypes from 'prop-types';

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="product-card" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Avg Rating:</strong> {product.avgRating.toFixed(1)} ⭐</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};



export default ProductCard;
