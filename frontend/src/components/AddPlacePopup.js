import useValidation from '../hooks/useValidation';
import PopupWithForm from './PopupWithForm';
import React from 'react';
import { LoadingContext } from '../contexts/LoadingContext';

function AddPlacePopup({ isOpen, onAddCard }) {

  const { isLoading, closeAllPopups } = React.useContext(LoadingContext);
  const validation = useValidation();

  React.useEffect(() => {
    if (!isOpen) {
      validation.reset();
    }
  }, [isOpen]);


  function handleSubmit(e) {
    e.preventDefault();

    onAddCard({
      name: validation.values.name,
      link: validation.values.link,
    });
  }

  return (
    <PopupWithForm
      name="form-img"
      title="Новое место"
      btnText={isLoading ? "Создание..." : "Создать"}
      isOpen={isOpen}
      onClose={closeAllPopups}
      onSubmit={handleSubmit}
      isValid={validation.isValid}>
      <fieldset className="popup__inputs">
        <label htmlFor="img-name-input" className="popup__field">
          <input type="text" className={`popup__input ${validation.errors.name && validation.errors.name.length > 0 && "popup__input_type_error"}`} placeholder="Название" id="img-name-input" name="name" required={true}
            minLength="2" maxLength="30" onChange={validation.handleChange} value={validation.values.name ? validation.values.name : ''} />
          <span className="popup__error img-name-input-error">{validation.errors.name && validation.errors.name}</span>
        </label>
        <label htmlFor="img-link-input" className="popup__field">
          <input type="url" className={`popup__input ${validation.errors.link && validation.errors.link.length > 0 && "popup__input_type_error"}`} placeholder="Ссылка на картинку" id="img-link-input" name="link"
            required={true} onChange={validation.handleChange} value={validation.values.link ? validation.values.link : ''} />
          <span className="popup__error img-link-input-error">{validation.errors.link && validation.errors.link}</span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}
export default AddPlacePopup
