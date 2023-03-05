import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Products } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css']
})
export class RelatedProductsComponent implements OnInit{
  productCategories!: Products[]
  productCat!: Products
constructor(private productSevice: ProductService, private route: ActivatedRoute) {}
ngOnInit(): void {
  this.productSevice.getProductsByCategory().subscribe(product => {
    this.productCategories = product.products
  })

  const routeParams = this.route.snapshot.paramMap;
    const currentRoute = Number(routeParams.get('id'));
    this.productSevice.getSingleProduct(currentRoute).subscribe((res: Products) => {
      this.productCat = res
    })
}
refreshPage() {
  location.reload();
}
}
