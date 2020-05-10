import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss'],
})
export class AuthHeaderComponent implements OnInit {

  @Input() title: String;

  @Input() icon: String;

  @Input() hideBack: boolean;

  constructor(
    private nav: NavController,
    private router: Router
  ) { }

  ngOnInit() {}

  goBack() {
    this.nav.back();
  }
  home() {
    this.router.navigate(['/', 'home']);
  }
}
