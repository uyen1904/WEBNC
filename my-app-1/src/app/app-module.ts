import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { provideHttpClient } from '@angular/common/http';
import { Lunarconverter } from './lunarconverter/lunarconverter';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
