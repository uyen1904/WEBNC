import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customerdetail',
  standalone: false,
  templateUrl: './customerdetail.html',
  styleUrl: './customerdetail.css',
})
export class Customerdetail {
  customer=[
            {"id":"c1","name":"Ji Chang Wook","gender":"male","image":"/assets/images/jichangwook.jpg"},
            {"id":"c2","name":"Taylor Swift","gender":"female","image":"/assets/images/TS.jpg"},
            {"id":"c3","name":"Kim Yoo Jung","gender":"female","image":"/assets/images/kimyoojung.jpg"},
            {"id":"c4","name":"Lee Je Hoon","gender":"male","image":"/assets/images/leejehoon.jpg"},
            {"id":"c5","name":"Khoai Lang Thang","gender":"male","image":"/assets/images/khoailangthang.jpg"}
           ]
           selected_customer:any
  constructor(private router:Router,private activeRouter:ActivatedRoute)
           {
            this.activeRouter.paramMap.subscribe(
              (param)=>{
                let id=param.get("id")
                if(id!=null) //lấy được id từ routing nào đó gửi qua
                {
                  //sau đó sẽ truy vấn id này trong dataset của mình:
                  this.selected_customer=this.customer.find(c=>c.id==id)
                }
              }
            )
           }
           go_back()
           {
            this.router.navigate(["listcustomer"])
           }
}
