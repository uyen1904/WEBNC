import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex18 } from '../app/ex18/ex18';
import { About } from './about/about';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Listproduct3 } from './listproduct3/listproduct3';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Listcustomer } from './listcustomer/listcustomer';
import { CustomerServices } from './customer-services';
import { Customerdetail } from './customerdetail/customerdetail';
import { ListCustomerService } from './list-customer-service/list-customer-service';
import { Lunarconverter } from './lunarconverter/lunarconverter';
const routes: Routes = [
  { path: '', redirectTo: '/lunarconverter', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'sanpham1', component: Listproduct1 },
  { path: 'sanpham2', component: Listproduct2 },
  { path: 'sanpham3', component: Listproduct3 },
  { path: 'listcustomer', component: Listcustomer },
  { path: 'listcustomer/:id', component: Customerdetail },
  { path: 'list-customer-service', component: ListCustomerService },
  { path: 'list-customer-service/:id', component: Customerdetail },
  { path: 'lunarconverter', component: Lunarconverter },
  { path: '**', component: Pagenotfound }
                       ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
