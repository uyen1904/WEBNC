import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ex13productdetail',
  standalone: false,
  templateUrl: './ex13productdetail.html',
  styleUrl: './ex13productdetail.css',
})
export class Ex13productdetail {
  product=[
            {"id":"p1","name":"Coca","price":"15.000","image":"/assets/images/coca.png"},
            {"id":"p2","name":"Pepsi","price":"14.000","image":"/assets/images/pepsi.png"},
            {"id":"p3","name":"Water","price":"10.000","image":"/assets/images/water_cup.jpg"},
            {"id":"p4","name":"Juice","price":"20.000","image":"/assets/images/watermelon.png"},
            {"id":"p5","name":"Sting","price":"12.000","image":"/assets/images/sting.jpg"}
           ]
           selected_product:any
  constructor(private router:Router,private activeRouter:ActivatedRoute)
           {
            this.activeRouter.paramMap.subscribe(
              (param)=>{
                let id = param.get("id");
      console.log("Received ID:", id); // ← Debug 1
      
      if(id != null) {
        this.selected_product = this.product.find(p => p.id == id);
        console.log("Found product:", this.selected_product); // ← Debug 2
      }
    }
  );
           }
           go_back()
           {
            this.router.navigate(["product"])
           }
}


