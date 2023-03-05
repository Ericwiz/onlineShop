import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { OfferPageComponent } from './offer-page/offer-page.component';
import { FeaturesComponent } from './features/features.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProductsComponent,
    FeaturedProductsComponent,
    OfferPageComponent,
    FeaturesComponent,
    ProductDetailComponent,
    RelatedProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
