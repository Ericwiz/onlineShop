import { Component, OnInit } from '@angular/core';
import { carts, ProductList, Products } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items!: carts[]
  item!: carts
  constructor(private productService: ProductService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    // this.productService.getCartItems().subscribe(res => {
    //   this.items = res.carts
      
    // })
    
    const param = this.route.snapshot.paramMap;
    const currentRoute = Number(param.get('id'))
    this.productService.getCartItem(currentRoute).subscribe(res => {
      this.item = res
    })
  }
}
