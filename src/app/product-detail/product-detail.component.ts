import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { addCart, carts, ProductList } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Products } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  product!: Products
  cart!:addCart
  carItems = {
    userId: 1,
    products: [
      {
        quantity: 0
      }
    ],
  total: 0,
  discountedTotal: 0,
  totalProducts: 0,
  totalQuantity: 0
  }

  constructor(
    private productSevice: ProductService,
    private route: ActivatedRoute,) {

  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const currentRoute = Number(routeParams.get('id'));
    this.productSevice.getSingleProduct(currentRoute).subscribe((res: Products) => {
      this.product = res
    })
  }

  quantity!: 0
  addCart(carItems: addCart) {
    console.warn(carItems)

    this.productSevice.addToCart(carItems).subscribe(result => {
      console.warn(result)
    })
  }
}
