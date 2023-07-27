import usePopupClose from '../hooks/usePopupClose';
import { LoadingContext } from '../contexts/LoadingContext';
import React from 'react';

export default function InfoTooltip({ isOK, tooltip }) {

  const { closeAllPopups } = React.useContext(LoadingContext);

  usePopupClose(tooltip, closeAllPopups)

  return (
    <dialog className={`popup popup_overlay-opacity_middle popup_type_tooltip ${tooltip ? "popup_opened" : ""}`} >
      <div className="popup__tooltip-group popup__form-group popup-wnd">
        <button type="reset" className="popup__close-btn image-btn image-btn_hover-opacity_medium" onClick={closeAllPopups}></button>
        <div className={`popup__back-image ${isOK ? "popup__back-image_type_ok" : "popup__back-image_type_error"}`} />
        <p className='popup__tooltip-text'>{tooltip}</p>
      </div>
    </dialog>
  );
}

