import { Component } from '@angular/core';
import { Book } from '../myservices/ibook';
import { BookAPIService } from '../myservices/book-apiservice';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-books-update',
  standalone: false,
  templateUrl: './books-update.html',
  styleUrl: './books-update.css',
})
export class BooksUpdate {
  book=new Book(); 
  books:any 
  errMessage:string='' 

  constructor(private _service: BookAPIService, private router: Router, private activeRouter: ActivatedRoute) { 
    this._service.getBooks().subscribe({ 
      next:(data) => { this.books = data }, 
      error:(err) => { this.errMessage = err } 
    }) 

    this.activeRouter.paramMap.subscribe(params => {   // ← thêm this.
      let bookId = params.get('id');
      if (bookId!=null) 
        this.searchBook(bookId)
    })
  }  

  putBook() { 
    this._service.putBook(this.book).subscribe({ 
      next:(data) => { this.books = data }, 
      error:(err) => { this.errMessage = err } 
    }) 
  } 

  searchBook(bookId: string) { 
    this._service.getBook(bookId).subscribe({ 
      next:(data) => { 
        console.log('data từ server:', data)
        this.book = data }, 
      error:(err) => { this.errMessage = err } 
    })
  }
} 
