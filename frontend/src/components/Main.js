import React from "react";
import Card from './Card';
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";


function Main(props) {

  React.useEffect(() => {
    props.menuDataHandler(props.menuDataInstance);
  }, [])

  const currentUser = React.useContext(CurrentUserContext);

  const cardElements = props.cards.map((card, i) => (
    <li className="elements__card" key={card._id}>
      <Card
        card={card}
        onCardClick={props.onCardClick}
        onCardLike={props.onCardLike}
        onCardDelete={props.onCardDelete}
      />
    </li>
  ));

  return (
    <main className="content">
      <section className="profile">
        <button type="button" className="profile__edit-avatar-btn image-btn" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={currentUser && currentUser.avatar} alt={currentUser && currentUser.name} />
        </button>
        <div className="profile__info">
          <div className="profile__info-row">
            <h1 className="profile__name">{currentUser && currentUser.name}</h1>
            <button type="button" className="profile__edit-btn image-btn image-btn_hover-opacity_medium" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__about">{currentUser && currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-card image-btn image-btn_hover-opacity_medium" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements" aria-label="Места путешествий">
        <ul className="elements__cards">
          {cardElements}
        </ul>
      </section>
    </main>
  );
}
export default Main;
