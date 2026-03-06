import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';

import { Ex18 } from './ex18/ex18';
import { Ex3 } from './ex3/ex3';
import { Learndirective } from './learndirective/learndirective';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Listproduct3 } from './listproduct3/listproduct3';
import { Mybinding } from './mybinding/mybinding';
import { Ptb1 } from './ptb1/ptb1';
import { Ptb2 } from './ptb2/ptb2';
import { Tdgpa } from './tdgpa/tdgpa';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Listcustomer } from './listcustomer/listcustomer';
import { Customerdetail } from './customerdetail/customerdetail';
import { Customer } from './customer/customer';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Lunarconverter } from './ex10/lunarconverter/lunarconverter';
import { Ex13product } from './ex13/ex13product/ex13product';
import { Ex13productdetail } from './ex13/ex13productdetail/ex13productdetail';
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
import { Login } from './login/login';
import { LoginFailed } from './login-failed/login-failed';

@NgModule({
  declarations: [
    App,
    About,
    Contact,
    Customer,
    Ex18,
    Ex3,
    Learndirective,
    Listproduct1,
    Listproduct2,
    Listproduct3,
    Mybinding,
    Ptb1,
    Ptb2,
    Tdgpa,
    Pagenotfound,
    Listcustomer,
    Customerdetail,
    Lunarconverter,
    Ex13product,
    Ex13productdetail,
    CourseRegistration,
    RelativeCourseRegistration,
    FakeProductComponent,
    FakeProductComponent1,
    BitCoinPriceIndex,
    Books,
    BooksDetail,
    BooksNew,
    BooksUpdate,
    BooksDelete,
    Fashion,
    FashionsDetail,
    Login,
    LoginFailed,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }