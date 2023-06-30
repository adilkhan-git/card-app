import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCards, likeCard, deleteCard } from "../../redux/actions";
import "./CardList.css";

function CardList() {
  const cards = useSelector((state) => state.cards);
  const likedOnly = useSelector((state) => state.likedOnly);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const handleLike = (id) => {
    dispatch(likeCard(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteCard(id));
  };

  const filteredCards = likedOnly ? cards.filter((card) => card.liked) : cards;

  return (
    <div className="card-list">
      {filteredCards.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-image-container">
            <img className="card-image" src={card.image} alt={card.title} />
            <div
              className={`like-button ${card.liked ? "liked" : ""}`}
              onClick={() => handleLike(card.id)}
            >
              &#10084;
            </div>
          </div>
          <div className="card-details">
            <p className="card-title">{card.title}</p>
            <p className="card-description">{card.description}</p>
          </div>
          <button
            className="delete-button"
            onClick={() => handleDelete(card.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardList;
