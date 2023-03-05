import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { carts, Products, addCart } from '../models/product';


import { ProductList } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product!:Products
 
  constructor(private http: HttpClient) { }

  getSamplProducts(): Observable<ProductList> {
    return this.http.get<ProductList>('https://dummyjson.com/products?limit=3')
  }

  featuredProducts(): Observable<ProductList> {
    return this.http.get<ProductList>('https://dummyjson.com/products?limit=8&skip=3')
  }

  getSingleProduct(id: number): Observable<Products> {
    return this.http.get<Products>(`https://dummyjson.com/products/${id}`)
  }

  getProductsByCategory(): Observable<ProductList> {
    return this.http.get<ProductList>('https://dummyjson.com/products')
  }
 addToCart(carItems: addCart): Observable<addCart> {
    return this.http.post<addCart>('https://dummyjson.com/carts/add', carItems)
  }

  getCartItems(): Observable<ProductList> {
    return this.http.get<ProductList>('https://dummyjson.com/carts?limit=20')
  }

  getCartItem(id: number): Observable<carts> {
    return this.http.get<carts>(`https://dummyjson.com/carts/${id}`)
  }
}
