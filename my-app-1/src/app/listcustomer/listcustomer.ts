import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-listcustomer',
  standalone: false,
  templateUrl: './listcustomer.html',
  styleUrl: './listcustomer.css',
})
export class Listcustomer {
  customer=[
            {"id":"c1","name":"Ji Chang Wook","gender":"male","image":"/assets/images/jichangwook.jpg"},
            {"id":"c2","name":"Taylor Swift","gender":"female","image":"/assets/images/TS.jpg"},
            {"id":"c3","name":"Kim Yoo Jung","gender":"female","image":"/assets/images/kimyoojung.jpg"},
            {"id":"c4","name":"Lee Je Hoon","gender":"male","image":"/assets/images/leejehoon.jpg"},
            {"id":"c5","name":"Khoai Lang Thang","gender":"male","image":"/assets/images/khoailangthang.jpg"}
           ]
           constructor(private router:Router,private activeRouter:ActivatedRoute)
           {

           }
           view_detail(id:any)
           {
            this.router.navigate(["listcustomer",id])
           }
}
