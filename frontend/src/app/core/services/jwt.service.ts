import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  saveUserId(userId: number) {
    window.localStorage['userId'] = userId;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
