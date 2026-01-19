import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { NestedNgfor } from './nested-ngfor/nested-ngfor';
import { CustomerDetail } from './customer-detail/customer-detail';
import { CustomerGroupList } from './customer-group-list/customer-group-list';
import { ListProduct } from './list-product/list-product';
import { Product } from './product/product';
import { ServiceProduct } from './service-product/service-product';

const routes: Routes = [
  { path: '', redirectTo: 'customer-group-list', pathMatch: 'full' },
  { path:'service-product-image-event', component:ServiceProductImageEvent }, 
  { path:'service-product-image-event/:id', component:ServiceProductImageEventDetail }, 
  { path: 'nested-ngfor', component: NestedNgfor },
  { path: 'customer-group-list', component: CustomerGroupList },
  { path: 'customer-detail/:id', component: CustomerDetail },
  { path: 'product', component: Product },
  { path: 'list-product', component: ListProduct },
  { path: 'service-product', component: ServiceProduct },
];

export const Routing = [
  Product,
  ListProduct,
  ServiceProduct
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
