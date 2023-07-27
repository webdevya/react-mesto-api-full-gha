import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import {
  getLikesCount,
  getIsUserLiked
} from '../utils/likesHandler.js';
import React from "react";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = getIsUserLiked(card.likes, currentUser._id);
  const cardLikeButtonClassName = (
    `elements__card-fav-btn image-btn image-btn_hover-opacity_low
    ${isLiked && 'elements__card-fav-btn_state_checked'}`);


  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <figure className="elements__card-figure">
      {isOwn &&
        <button type="button" className="elements__card-trash-btn image-btn image-btn_hover-opacity_medium"
          onClick={handleDeleteClick}></button>}
      <img className="elements__card-image" src={card.link} alt={card.name} onClick={handleClick} />
      <figcaption className="elements__card-caption">
        <h2 className="elements__card-caption-text">{card.name}</h2>
        <div className="elements__card-fav">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <p className="elements__card-fav-count">{getLikesCount(card.likes)}</p>
        </div>
      </figcaption>
    </figure>
  );
}
export default Card;
