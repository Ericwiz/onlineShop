import { Component, Input } from '@angular/core';
import { ProductList, Products } from '../models/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
@Input() sampleProduct!: Products
}
