import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

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
    private nav: NavController
  ) { }

  ngOnInit() {}

  goBack() {
    this.nav.back();
  }

}
