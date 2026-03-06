import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex18 } from '../app/ex18/ex18';
import { About } from './about/about';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Listproduct3 } from './listproduct3/listproduct3';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Listcustomer } from './listcustomer/listcustomer';

import { Customerdetail } from './customerdetail/customerdetail';
import { ListCustomerService } from './list-customer-service/list-customer-service';
import { Lunarconverter } from './ex10/lunarconverter/lunarconverter';
import { Ex13productdetail } from './ex13/ex13productdetail/ex13productdetail';
import { Ex13product } from './ex13/ex13product/ex13product';
import { CourseRegistration } from './course-registration/course-registration';
import { RelativeCourseRegistration } from './relative-course-registration/relative-course-registration';
import { FakeProductComponent } from './ex26/fake-product-component/fake-product-component';
import { FakeProductComponent1 } from './ex27/fake-product-component1/fake-product-component1';
import { BitCoinPriceIndex } from './ex28/bit-coin-price-index/bit-coin-price-index';
import { Books } from './books/books';
import { BooksDetail } from './books-detail/books-detail';
import { BooksNew } from './books-new/books-new';
import { BooksUpdate } from './books-update/books-update';
import { BooksDelete } from './books-delete/books-delete';
import { Fashion } from './fashion/fashion';
import { FashionsDetail } from './fashions-detail/fashions-detail';
import { LoginFailed } from './login-failed/login-failed';
import { Login } from './login/login';
import { AuthGuard } from './guard-auth/guard-auth';
const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'login-failed', component: LoginFailed },
  { path: 'about', component: About, canActivate: [AuthGuard] },
  { path: 'sanpham1', component: Listproduct1,canActivate: [AuthGuard] },
  { path: 'sanpham2', component: Listproduct2, canActivate: [AuthGuard] },
  { path: 'sanpham3', component: Listproduct3, canActivate: [AuthGuard] },
  { path: 'listcustomer', component: Listcustomer, canActivate: [AuthGuard] },
  { path: 'listcustomer/:id', component: Customerdetail, canActivate: [AuthGuard] },
  { path: 'list-customer-service', component: ListCustomerService, canActivate: [AuthGuard] },
  { path: 'list-customer-service/:id', component: Customerdetail, canActivate: [AuthGuard] },
  { path: 'lunarconverter', component: Lunarconverter, canActivate: [AuthGuard] },
  { path: 'ex13product', component: Ex13product, canActivate: [AuthGuard] },
  { path: 'ex13product/:id', component: Ex13productdetail, canActivate: [AuthGuard] },
  { path: 'course-registration', component: CourseRegistration, canActivate: [AuthGuard] },
  { path: 'relative-course-registration', component: RelativeCourseRegistration, canActivate: [AuthGuard] },
  { path: 'ex26', component: FakeProductComponent, canActivate: [AuthGuard] },
  { path: 'ex27', component: FakeProductComponent1, canActivate: [AuthGuard] },
  { path: 'ex28', component: BitCoinPriceIndex, canActivate: [AuthGuard] },
  { path: 'ex39', component: Books, canActivate: [AuthGuard] },
  { path: 'ex41/:id', component: BooksDetail, canActivate: [AuthGuard] },
  { path: 'ex43', component: BooksNew, canActivate: [AuthGuard] },
  { path: 'ex45', component: BooksUpdate, canActivate: [AuthGuard] },
  { path: 'ex45/:id', component: BooksUpdate, canActivate: [AuthGuard] },
  { path: 'ex47', component: BooksDelete, canActivate: [AuthGuard] },
  { path: 'ex53', component: Fashion, canActivate: [AuthGuard] },
  { path: 'ex53/:id', component: FashionsDetail, canActivate: [AuthGuard] },
  { path: '**', component: Pagenotfound }
                       ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }