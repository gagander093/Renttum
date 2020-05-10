import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-buttons.component.html',
  styleUrls: ['./home-buttons.component.scss'],
})
export class HomeButtonsComponent implements OnInit {

  @Input() typeId;

  @Input() image;

  @Input() title;

  bgImage;

  constructor() { }

  ngOnInit() {
    this.bgImage = `url("${this.image}")`;
  }

  getLink() {
    return `/enquiry/${this.typeId}`;
  }

}
