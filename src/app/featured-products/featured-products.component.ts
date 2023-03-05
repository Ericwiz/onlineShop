import { Component, Input } from '@angular/core';
import { ProductList, Products } from '../models/product';
@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {
 @Input() product!: Products
}
