import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-categories-card',
  templateUrl: './sub-categories-card.component.html',
  styleUrls: ['./sub-categories-card.component.scss'],
})
export class SubCategoriesCardComponent implements OnInit {

  @Input() typeId;

  constructor() { }

  ngOnInit() {}

  buttonClick() {
    return `/products-list/${this.typeId}`;
  }

}
