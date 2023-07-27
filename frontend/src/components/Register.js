import Credentials from './Credentials';
import React from 'react';
import { LoadingContext } from '../contexts/LoadingContext';

export default function Register({ onSubmit, menuDataHandler, menuDataInstance }) {
  const { isLoading } = React.useContext(LoadingContext);
  return (
    <Credentials
      name="form-login"
      headertext="Регистрация"
      btnText={isLoading ? "Регистрация..." : "Зарегистрироваться"}
      onSubmit={onSubmit}
      menuDataHandler={menuDataHandler}
      menuDataInstance={menuDataInstance}
    >
      <p className='credentials__footer-text'>Уже зарегистрированы? <button className='credentials__footer-link' onClick={menuDataInstance.onClick}>Войти</button></p>
    </Credentials>
  );
}

