import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  category = [
    { TypeName: 'Home Furniture', ProductTypeId: 'hi', ProdTypePic: '../../../assets/images/home/home-item.png' },
    { TypeName: 'Mobile & Tablets', ProductTypeId: 'li', ProdTypePic: '../../../assets/images/home/connection.png' },
    { TypeName: 'Men’s Fashion', ProductTypeId: 'gi', ProdTypePic: '../../../assets/images/home/man.png' },
    { TypeName: 'Music & Media', ProductTypeId: 'ti', ProdTypePic: '../../../assets/images/home/string-instrument2.png' },
    { TypeName: 'Motor & Bikes', ProductTypeId: 'ci', ProdTypePic: '../../../assets/images/home/transport.png' },
    { TypeName: 'Books & Stationery', ProductTypeId: 'bi', ProdTypePic: '../../../assets/images/home/flat.png' }
  ];

  constructor() {}

}
