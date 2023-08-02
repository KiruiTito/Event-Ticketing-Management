import React from 'react';

function Cards(props) {
  const { title, image_url, category, location, start_date, end_date, vip_tickets_available, regular_tickets_available } = props;

  return (
    <div className="product-container">
      <div className="product-card">
        <img src={image_url} className="product-img" alt={title} />
        <div className="product-details">
          <h1 className="product-title">Title: {title}</h1>
          <h3 className="product-category">Category: {category}</h3>
          <h4 className="product-description">Location: {location}</h4>
          <p className="product-description">Start date: {start_date}</p>
          <p className="product-description">End date: {end_date}</p>
          {vip_tickets_available && (
            <h4 className="product-description">VIP Tickets available: {vip_tickets_available}</h4>
          )}
          {regular_tickets_available && (
            <h4 className="product-description">Regular Tickets available: {regular_tickets_available}</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
