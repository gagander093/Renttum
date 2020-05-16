import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products = [
    { TypeName: 'Health Insurance', ProductTypeId: 'hi', ProdTypePic: '../../../assets/images/home/1-icon.png' },
    { TypeName: 'Life Insurance', ProductTypeId: 'li', ProdTypePic: '../../../assets/images/home/2-icon.png' },
    { TypeName: 'General Insurance', ProductTypeId: 'gi', ProdTypePic: '../../../assets/images/home/3-icon.png' },
    { TypeName: 'Term Insurance', ProductTypeId: 'ti', ProdTypePic: '../../../assets/images/home/4-icon.png' },
    { TypeName: 'Car Insurance', ProductTypeId: 'ci', ProdTypePic: '../../../assets/images/home/5-icon.png' },
    { TypeName: 'Bike Insurance', ProductTypeId: 'bi', ProdTypePic: '../../../assets/images/home/6-icon.png' }
  ];
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    startAutoplay: true
  };

  constructor() {}

}
