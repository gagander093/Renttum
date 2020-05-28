import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(
    private router: Router,
    private menu: MenuController
  ) { }

  ngOnInit() {
  }
  Login() {
    this.router.navigate(['login']);
  }
  setNumber() {
    this.router.navigate(['set-password']);
  }
}
