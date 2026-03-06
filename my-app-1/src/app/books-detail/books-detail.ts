import { Component, OnInit } from '@angular/core';
import { BookAPIService } from '../myservices/book-apiservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books-detail',
  standalone: false,
  templateUrl: './books-detail.html',
  styleUrl: './books-detail.css',
})
export class BooksDetail implements OnInit{
  book:any={}; 
  errMessage:string='';

  constructor(
    private route:ActivatedRoute,
    private _service: BookAPIService, private router:Router, private activeRouter:ActivatedRoute){     
  } 
  ngOnInit(): void{
   console.log('BooksDetail INIT');

  this.route.paramMap.subscribe(params => {
    console.log('PARAM MAP = ', params);

    const id = params.get('id');
    console.log('ID = ', id);

    if (id) {
      this._service.getBook(id).subscribe({
        next: data => {
          console.log('BOOK FROM API = ', data);
          this.book = data;
        },
        error: err => console.log('API ERROR = ', err)
      });
    }
  });
}
  // searchBook(bookId:string) 
  // { 
  //   this._service.getBook(bookId).subscribe({ 
  //     next:(data)=>{this.book=data}, 
  //     error:(err)=>{this.errMessage=err} 
  //   }) 
  // } 
  
}
