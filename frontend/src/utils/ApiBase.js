export default class ApiBase {
  constructor({ baseUrl,
    headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _request(localUrl, options, restUrlPart = '') {
    return fetch(this._getUrl(localUrl, restUrlPart), options)
      .then(res => this._getResponseData(res));
  }


  _getHeadersWithAuthFormStorage() {
    const jwt = localStorage.getItem('jwt');
    return this._getHeadersWithAuth(jwt);
  }

  _getHeadersWithAuth(jwt) {
    const headers = {
      ...this._headers,
      'Authorization': `Bearer ${jwt}`
    };

    return headers;
  }

  _getHeaders(addAuth = false) {
    return addAuth ? this._getHeadersWithAuthFormStorage() : this._headers;
  }

  // getDataJson(localUrl, addAuth = false) {
  //   return this.getDataJsonWithHeaders(localUrl, this._headers, addAuth);
  // }

  //getDataJsonWithHeaders (localUrl, headers, addAuth = false)
  getDataJson(localUrl, addAuth = false) {

    return this._request(localUrl,
      {
        method: 'GET',
        headers: this._getHeaders(addAuth)
      });
  }

  updateData(localUrl, dataObj, restPart, addAuth = false) {
    return this._request(localUrl,
      {
        method: 'PATCH',
        headers: this._getHeaders(addAuth),
        body: dataObj ? JSON.stringify(dataObj) : null
      }, restPart);
  }

  addData(localUrl, dataObj, addAuth = false) {
    return this._request(localUrl,
      {
        method: 'POST',
        headers: this._getHeaders(addAuth),
        body: JSON.stringify(dataObj)
      });
  }

  deleteData(localUrl, restPart, addAuth = false) {
    return this._request(localUrl,
      {
        method: 'DELETE',
        headers: this._getHeaders(addAuth)
      }, restPart);
  }

  putData(localUrl, dataObj, restPart, addAuth = false) {
    return this._request(localUrl,
      {
        method: 'PUT',
        headers: this._getHeaders(addAuth),
        body: dataObj ? JSON.stringify(dataObj) : null
      }, restPart);
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  _getUrl(localUrl, restPart) {
    if (restPart)
      return `${this._baseUrl}${localUrl}/${restPart}`;
    return this._baseUrl + localUrl;
  }
}


