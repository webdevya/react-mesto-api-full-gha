import useValidation from '../hooks/useValidation';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import React from 'react';
import { LoadingContext } from '../contexts/LoadingContext';

function EditProfilePopup({ isOpen, onUpdateUser }) {


  const validation = useValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const { isLoading, closeAllPopups } = React.useContext(LoadingContext);

  React.useEffect(() => {
    validation.reset({
      name: currentUser.name,
      about: currentUser.about
    })
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: validation.values.name,
      about: validation.values.about,
    });
  }

  return (
    <PopupWithForm
      name="form-profile"
      title="Редактировать профиль"
      btnText={isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={closeAllPopups}
      onSubmit={handleSubmit}
      isValid={validation.isValid}>
      <fieldset className="popup__inputs">
        <label htmlFor="profile-name-input" className="popup__field">
          <input type="text" className={`popup__input ${validation.errors.name && validation.errors.name.length > 0 && "popup__input_type_error"}`} placeholder="Имя" id="profile-name-input" name="name"
            required={true} minLength="2" maxLength="40" onChange={validation.handleChange} value={validation.values.name ? validation.values.name : ''} />
          <span className="popup__error profile-name-input-error">{validation.errors.name && validation.errors.name}</span>
        </label>
        <label htmlFor="profile-about-input" className="popup__field">
          <input type="text" className={`popup__input ${validation.errors.about && validation.errors.about.length > 0 && "popup__input_type_error"}`} placeholder="О себе" id="profile-about-input" name="about"
            required={true} minLength="2" maxLength="200" onChange={validation.handleChange} value={validation.values.about ? validation.values.about : ''} />
          <span className="popup__error profile-about-input-error">{validation.errors.about && validation.errors.about}</span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditProfilePopup
