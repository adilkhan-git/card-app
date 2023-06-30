import React from "react";
import "./Card.css";

const Card = ({ image, description, liked, onLike, onDelete }) => {
  const heartIconClass = liked ? "heart-icon liked" : "heart-icon";

  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image" src={image} alt="Card" />
        <div className={heartIconClass} onClick={onLike}></div>
      </div>
      <div className="card-details">
        <p className="card-description">{description}</p>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
