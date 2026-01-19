import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, Routing } from './app-routing-module';
import { App } from './app';
import { Productservice } from './productservice/productservice';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { Catalogservice } from './catalogservice/catalogservice';
import { NestedNgfor } from './nested-ngfor/nested-ngfor';
import { CustomerGroupList } from './customer-group-list/customer-group-list';
import { CustomerDetail } from './customer-detail/customer-detail';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from './product/product';
import { ListProduct } from './list-product/list-product';
import { ServiceProduct } from './service-product/service-product';


@NgModule({
  declarations: [
    App,
    ServiceProductImageEvent,
    ServiceProductImageEventDetail,
    NestedNgfor,
    CustomerGroupList,
    CustomerDetail,
    Product,
    ListProduct,
    ServiceProduct,
    Routing,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
