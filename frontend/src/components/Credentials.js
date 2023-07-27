import useValidation from '../hooks/useValidation';
import React from 'react';

export default function Credentials({ name, headertext, btnText, onSubmit, children, menuDataHandler, menuDataInstance }) {



  React.useEffect(() => {
    menuDataHandler(menuDataInstance);
  }, [])

  const validation = useValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ email: validation.values.email, password: validation.values.pwd });
  }

  return (
    <section className="credentials">
      <h2 className="credentials__header">{headertext}</h2>
      <form className="credentials__form" name={name} onSubmit={handleSubmit} noValidate={true}>
        <fieldset className="credentials__inputs">
          <label htmlFor="credentials-email-input" className="credentials__field">
            <input type="email" className={`credentials__input ${validation.errors.email && validation.errors.email.length > 0 && "credentials__input_type_error"}`} placeholder="Email" id="credentials-email-input" name="email"
              required={true} onChange={validation.handleChange} value={validation.values.email ? validation.values.email : ''} />
            <span className="credentials__error credentials-email-input-error">{validation.errors.email && validation.errors.email}</span>
          </label>
          <label htmlFor="credentials-pwd-input" className="credentials__field">
            <input type="password" className={`credentials__input ${validation.errors.pwd && validation.errors.pwd.length > 0 && "credentials__input_type_error"}`} placeholder="Пароль" id="credentials-pwd-input" name="pwd"
              required={true} onChange={validation.handleChange} value={validation.values.pwd ? validation.values.pwd : ''} />
            <span className="credentials__error credentials-pwd-input-error">{validation.errors.pwd && validation.errors.pwd}</span>
          </label>
        </fieldset>
        <button type="submit" className={`credentials__submit-btn ${!validation.isValid && "credentials__submit-btn_disabled"}`} disabled={!validation.isValid}>{btnText}</button>
      </form>
      {children}
    </section>
  );
}
