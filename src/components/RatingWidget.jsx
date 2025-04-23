import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
    } else {
      alert("Please select a rating between 1 and 5 stars.");
    }
  };

  return (
    <div style={{ marginTop: '8px' }}>
      <div>
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            style={{
              cursor: 'pointer',
              fontSize: '24px',
              color: star <= (hoveredRating || rating) ? 'gold' : '#ccc'
            }}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit} style={{ marginTop: '8px' }}>
        Submit Rating
      </button>
    </div>
  );
};



export default RatingWidget;
