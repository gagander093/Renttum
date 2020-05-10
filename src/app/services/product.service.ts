import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpService
  ) { }

  getProducts() {
    return this.http.get('/User/GetProducts/');
  }

  getProductTypes() {
    return this.http.get('/User/GetProductTypes/');
  }

  getProductByType(id) {
    return this.http.get(`/User/GetProductsByTypeID/?ProductTypeID=${id}`);
  }

}
