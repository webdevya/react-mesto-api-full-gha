import useValidationRefSubscription from '../hooks/useValidationRefSubscription';
import PopupWithForm from './PopupWithForm';
import React from 'react';
import { LoadingContext } from '../contexts/LoadingContext';

function EditAvatarPopup({ isOpen, onUpdateAvatar }) {

  const avatarRef = React.useRef();
  const validation = useValidationRefSubscription([avatarRef]);
  const { isLoading, closeAllPopups } = React.useContext(LoadingContext);

  React.useEffect(() => {
    if (!isOpen) {
      validation.reset({ avatar: '' });
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(validation.values.avatar);
  }

  return (
    <PopupWithForm
      name="form-avatar"
      title="Обновить аватар"
      btnText={isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={closeAllPopups}
      onSubmit={handleSubmit}
      isValid={validation.isValid}>
      <fieldset className="popup__inputs">
        <label htmlFor="profile-avatar-input" className="popup__field">
          <input type="url" className={`popup__input ${validation.errors.avatar && validation.errors.avatar.length > 0 && "popup__input_type_error"}`} placeholder="Ссылка на аватар" id="profile-avatar-input"
            name="avatar" required={true} ref={avatarRef} />
          <span className="popup__error profile-avatar-input-error">{validation.errors.avatar && validation.errors.avatar}</span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditAvatarPopup
