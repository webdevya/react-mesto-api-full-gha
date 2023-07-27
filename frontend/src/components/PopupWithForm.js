import React from 'react';
import usePopupClose from '../hooks/usePopupClose';

function PopupWithForm({ name, title, btnText, isOpen, children, onClose, onSubmit, isValid }) {

  usePopupClose(isOpen, onClose)

  return (
    <dialog className={`popup popup_overlay-opacity_middle popup_type_${name} ${isOpen ? "popup_opened" : ""}`} >
      <div className="popup__form-group popup-wnd">
        <button type="reset" className="popup__close-btn image-btn image-btn_hover-opacity_medium" onClick={onClose}></button>
        <h2 className="popup__form-header">{title}</h2>
        <form className="popup__view popup__form" name={name} onSubmit={onSubmit} noValidate={true}>
          {children}
          <button type="submit" className={`popup__save-btn ${!isValid && "popup__save-btn_disabled"}`} disabled={!isValid}>{btnText}</button>
        </form>
      </div>
    </dialog>
  );
}
export default PopupWithForm
