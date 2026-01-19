import { Component } from '@angular/core';
import { Catalogservice } from '../catalogservice/catalogservice';

@Component({
  selector: 'app-nested-ngfor',
  standalone: false,
  templateUrl: './nested-ngfor.html',
  styleUrl: './nested-ngfor.css',
})
export class NestedNgfor {
  datas: any;
  
  constructor(private catalogService: Catalogservice) {
    this.datas = catalogService.getCategories();
    console.log("Categories loaded:", this.datas);
  }
}
