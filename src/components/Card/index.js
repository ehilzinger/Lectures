import React from 'react';
import './CardComponent.css'; // Assuming you'll add some styles
import Link from '@docusaurus/Link';

const CardComponent = ({ title, text, link }) => {
  return (
    <div className="card card-link-wrapper">
    <Link to={link} className="card-link">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
      </Link>
      </div>
  );
};

export default CardComponent;