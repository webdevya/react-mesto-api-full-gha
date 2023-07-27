import Credentials from './Credentials';
import React from 'react';
import { LoadingContext } from '../contexts/LoadingContext';

export default function Login({ onSubmit, menuDataHandler, menuDataInstance }) {

  const { isLoading } = React.useContext(LoadingContext);

  return (
    <Credentials
      name="form-login"
      headertext="Вход"
      btnText={isLoading ? "Вход..." : "Войти"}
      onSubmit={onSubmit}
      menuDataHandler={menuDataHandler}
      menuDataInstance={menuDataInstance}
    >
    </Credentials>
  );
}
