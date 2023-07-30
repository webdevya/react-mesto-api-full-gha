import ApiBase from "./ApiBase";
class Auth extends ApiBase {
  constructor({ baseUrl, headers },
    { signinUrl, signupUrl, userLocalUrl }) {
    super({ baseUrl, headers });
    this._signinUrl = signinUrl;
    this._signupUrl = signupUrl;
    this._userLocalUrl = userLocalUrl;
  }

  checkToken(jwt) {
    //return super.getDataJsonWithHeaders(this._userLocalUrl, this._getAuthHeaders(jwt));
    return super.getDataJson(this._userLocalUrl, true);
  }

  signup({ email, password }) {
    return super.addData(this._signupUrl, { password, email });
  }

  signin({ email, password }) {
    return super.addData(this._signinUrl, { password, email });
  }

  // _getAuthHeaders(jwt) {
  //   const headers = {
  //     ...this._headers,
  //     'Authorization': `Bearer ${jwt}`
  //   };

  //   return headers;
  // }
}
const localUrls = { signinUrl: 'signin', signupUrl: 'signup', userLocalUrl: 'users/me' }

const auth = new Auth({
  baseUrl: 'https://api.webdev.students.nomoreparties.co/',//'https://auth.nomoreparties.co/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}, localUrls);

export { auth };
