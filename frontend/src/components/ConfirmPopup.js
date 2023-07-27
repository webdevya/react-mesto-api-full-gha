import PopupWithForm from './PopupWithForm';
import React from 'react';
import { LoadingContext } from '../contexts/LoadingContext';

function ConfirmPopup({ title, isOpen, processingText, onConfirm }) {

  const { isLoading, closeAllPopups } = React.useContext(LoadingContext);

  function handleSubmit(e) {
    e.preventDefault();
    onConfirm();
  }


  return (
    <PopupWithForm
      name="form-confirm"
      title={title}
      btnText={isLoading ? processingText : "Да"}
      isOpen={isOpen}
      onClose={closeAllPopups}
      onSubmit={handleSubmit}
      isValid={true}>
    </PopupWithForm>
  );
}
export default ConfirmPopup
