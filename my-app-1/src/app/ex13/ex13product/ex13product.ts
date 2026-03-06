import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ex13product',
  standalone: false,
  templateUrl: './ex13product.html',
  styleUrl: './ex13product.css',
})
export class Ex13product {
  product=[
            {"id":"p1","name":"Coca","price":"15.000","image":"/assets/images/coca.png"},
            {"id":"p2","name":"Pepsi","price":"14.000","image":"/assets/images/pepsi.png"},
            {"id":"p3","name":"Water","price":"10.000","image":"/assets/images/water_cup.jpg"},
            {"id":"p4","name":"Juice","price":"20.000","image":"/assets/images/watermelon.png"},
            {"id":"p5","name":"Sting","price":"12.000","image":"/assets/images/sting.jpg"}
           ]
           constructor(private router:Router,private activeRouter:ActivatedRoute)
           {

           }
           view_detail(id:any)
           {
            console.log("Navigateing to:", id);
            this.router.navigate(['product', id])
           }
}
