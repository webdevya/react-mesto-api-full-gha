import ApiBase from "./ApiBase";
//import { localUrls } from './indexConstants.js';


class Api extends ApiBase {
  constructor({ baseUrl,
    headers,
  }, { cardLocalUrl, cardLikeLocalUrl, userLocalUrl, userAvatarLocalUrl }) {
    super({ baseUrl, headers });
    this._cardLocalUrl = cardLocalUrl;
    this._cardLikeLocalUrl = cardLikeLocalUrl;
    this._userLocalUrl = userLocalUrl;
    this._userAvatarLocalUrl = userAvatarLocalUrl;
  }

  getInitialCards() {
    return super.getDataJson(this._cardLocalUrl, true);
  }

  getUserInfo() {
    return super.getDataJson(this._userLocalUrl, true);
  }

  updateUserProps(userProps) {
    return super.updateData(this._userLocalUrl, userProps, null, true);
  }

  updateUserAvatar(avatar) {
    return super.updateData(this._userAvatarLocalUrl, { avatar }, null, true);
  }

  addCard({ name, link }) {
    return super.addData(this._cardLocalUrl, { name, link }, true);
  }

  deleteCard(id) {
    return super.deleteData(this._cardLocalUrl, id, true);
  }

  setLike(id) {
    return super.putData(this._cardLocalUrl, null, `${id}/${this._cardLikeLocalUrl}`, true)
  }

  deleteLike(id) {
    return super.deleteData(this._cardLocalUrl, `${id}/${this._cardLikeLocalUrl}`, true)
  }

  toggleLike(id, isLike) {
    return (isLike ? this.setLike(id) : this.deleteLike(id));
  }
}
const localUrls = { cardLocalUrl: 'cards', cardLikeLocalUrl: 'likes', userLocalUrl: 'users/me', userAvatarLocalUrl: 'users/me/avatar' }

const api = new Api({
  baseUrl: 'https://api.webdev.students.nomoreparties.co/', //'https://mesto.nomoreparties.co/v1/cohort-64/',
  headers: {
    //authorization: 'fc81dab5-e143-401c-aaf5-84987c8320c2',
    'Content-Type': 'application/json'
  }
}, localUrls);

export { api };
