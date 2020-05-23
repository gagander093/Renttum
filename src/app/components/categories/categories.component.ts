import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  @Input() typeId;

  constructor() { }

  ngOnInit() {}

  buttonClick() {
    return `/products-list/${this.typeId}`;
  }

}
