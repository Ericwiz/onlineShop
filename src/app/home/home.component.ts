import { Component, OnInit } from '@angular/core';
import { ProductList, Products } from '../models/product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products: Products[] = []
  featuredProducts!: Products[]
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getSamplProducts().subscribe(product => {
      this.products = product.products;
      console.log(product.products)
      console.log(product.total)
      // console.log(this.products)
    })

    this.productService.featuredProducts().subscribe(product => {
      this.featuredProducts = product.products
    })
  }
}
