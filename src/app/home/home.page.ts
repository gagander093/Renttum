import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  category = [
    { TypeName: 'Home Furniture', ProductTypeId: 'hf', ProdTypePic: '../../../assets/images/home/home-item.png' },
    { TypeName: 'Mobile & Tablets', ProductTypeId: 'mt', ProdTypePic: '../../../assets/images/home/connection.png' },
    { TypeName: 'Men’s Fashion', ProductTypeId: 'mf', ProdTypePic: '../../../assets/images/home/man.png' },
    { TypeName: 'Music & Media', ProductTypeId: 'mm', ProdTypePic: '../../../assets/images/home/string-instrument2.png' },
    { TypeName: 'Motor & Bikes', ProductTypeId: 'mb', ProdTypePic: '../../../assets/images/home/transport.png' },
    { TypeName: 'Books & Stationery', ProductTypeId: 'bs', ProdTypePic: '../../../assets/images/home/flat.png' }
  ];

  constructor() {}

}
