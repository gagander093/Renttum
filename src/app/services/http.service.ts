import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import Constant from '../constants';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HTTP,
    private storage: Storage,
    private router: Router,
    private toast: ToastController
  ) {
    http.setDataSerializer('json');
  }

  getInstance() {
    return this.http;
  }

  getUrl(api) {
    return Constant.API_BASE + api;
  }

  async getHeaders(headers) {
    let authHeader;

    try {
      let user = JSON.parse(await this.storage.get('user'));

      if(user.accessToken) {
        authHeader = {
          Authorization: `Basic ${user.accessToken}`
        };
      }
    } catch(e) { }

    return Object.assign({}, headers, authHeader);
  }

  async showMessage(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  responseSerializer(resp) {
    let ret = {};
    let hasError = false;

    if (resp && resp.data) {
      try {
        ret = JSON.parse(resp.data);

        if (ret['responseCode'] == 1) {
          hasError = true;
        }
      } catch(e) { }
    }

    if (hasError) {
      throw ret;
    }

    return ret;
  }

  errorSerializer(error) {
    let msg = 'Something went wrong!';

    try {
      if (error['messages'] && error['messages']['messageDescription']) {
        msg = error['messages']['messageDescription'];
      } else {
        let _error = JSON.parse(error['error']);
        msg = _error['Message'];

        if (error.status == 401) {
          this.router.navigate(['auth']);
        }
      }
    } catch(e) { }
    
    this.showMessage(msg);

    throw error;
  }

  async get(api, data?, headers?, suppressWithoutAuth?) {
    headers = await this.getHeaders(headers);

    if (suppressWithoutAuth) {
      if (!headers.Authorization) return false;
    }

    return this.http
      .get(this.getUrl(api), data, headers)
      .then(this.responseSerializer.bind(this))
      .catch(this.errorSerializer.bind(this));
  }

  async post(api, data?, headers?) {
    headers = await this.getHeaders(headers);

    return this.http
      .post(this.getUrl(api), data, headers)
      .then(this.responseSerializer.bind(this))
      .catch(this.errorSerializer.bind(this));
  }

}