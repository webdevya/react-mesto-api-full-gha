
import usePopupClose from '../hooks/usePopupClose';
import { LoadingContext } from '../contexts/LoadingContext';
import React from 'react';

function ImagePopup({ card }) {

  const { closeAllPopups } = React.useContext(LoadingContext);

  usePopupClose(card !== null, closeAllPopups)

  return (
    <dialog className={`popup popup_overlay-opacity_high popup_type_img ${card ? "popup_opened" : ""}`} >
      <div className="popup__image-group popup-wnd">
        <button type="reset" className="popup__close-btn image-btn image-btn_hover-opacity_medium" onClick={closeAllPopups}></button>
        <figure className="popup__view">
          <img className="popup__image" src={card ? card.link : "#"} alt={card?.name} />
          <figcaption className="popup__image-caption">
            <h2 className="popup__image-caption-text">{card?.name}</h2>
          </figcaption>
        </figure>
      </div>
    </dialog>
  );
}

export default ImagePopup
