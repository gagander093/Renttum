import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../classes/user';
import { EventEmitter } from 'events';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user;

  cities;

  userEmitter: EventEmitter;

  referrerPromocode;

  constructor(
    private http: HttpService,
    private storage: Storage
  ) {
    this.userEmitter = new EventEmitter();
  }

  checkAuth() {
    return new Promise<boolean>(async (resolve, reject) => {
      let user = await this.storage.get('user');

      if (user && user.length) {
        try {
          let valid = (Object.keys(JSON.parse(user)).length > 0);
          resolve(valid);
        } catch(e) {
          resolve(false);
        }
      }

      resolve(false);
    });
  }

  doLogin(phone) {
    return this.http.post('/user/PostsendLoginSmsCustomer', {
      MobileNumber: phone
    });
  }

  doRegister(user: User) {
    return this.http.post('/user/PostRegisterCustomer', user);
  }

  resendOtp(phone) {
    return this.http.post('/user/PostsendLoginResendSmsCustomer', {
      MobileNumber: phone
    });
  }

  verifyOtp(phone, otp) {
    return this.http.post('/User/PostVerifyLoginCustomer', {
      MobileNumber: phone,
      OTP: otp
    });
  }

  getProfile(suppressWithoutAuth?) {
    return this.http
      .get('/Cust/GetCustomerProfileDetails/', null, null, suppressWithoutAuth)
      .then(user => {
        this.user = user;
        this.userEmitter.emit('profile', user);
      });
  }

  updateProfile(user) {
    return this.http
      .post('/Cust/UpdateCustomerProgile/', user);
  }

  getCities() {
    return this.http
      .get('/User/GetAllCity/')
      .then(cities => {
        this.cities = cities;
        this.userEmitter.emit('cities', cities);
      })
      .catch(() => {});
  }

}
