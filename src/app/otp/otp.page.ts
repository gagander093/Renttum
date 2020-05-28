import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  phone: String;

  otp: String;

  otpWaitTime = 60;

  otpInterval;

  constructor(
    private menu: MenuController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewDidEnter() {
    this.startTimer();
  }

  ionViewWillLeave() {
    this.menu.enable(true);
  }

  startTimer() {
    clearInterval(this.otpInterval);

    this.otpWaitTime = 60;
    this.otpInterval = setInterval(() => {
      if (this.otpWaitTime > 0) {
        this.otpWaitTime--;
      } else {
        clearInterval(this.otpInterval);
      }
    }, 1000);
  }

  validateOtp() {
    this.router.navigate(['home']);
  }

}
