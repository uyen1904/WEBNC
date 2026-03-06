import { Component } from '@angular/core';
import { FakeProductService1 } from '../services/fake-product-service1';
import { FakeProductService } from '../../ex26/services/fake-product-service';


@Component({
  selector: 'app-fake-product-component1',
  standalone: false,
  templateUrl: './fake-product-component1.html',
  styleUrl: './fake-product-component1.css',
})
export class FakeProductComponent1 {
  data:any 
  errMessage:string='' 
  constructor(_service:FakeProductService){ 
    _service.getFakeProductData().subscribe({ 
      next:(data)=>{ this.data=data}, 
      error:(err)=>{ 
        this.errMessage=err         
      } 
    }) 
  } 
}
