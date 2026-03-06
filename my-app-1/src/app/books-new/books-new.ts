import { Component } from '@angular/core';
import { Book } from '../myservices/ibook';
import { BookAPIService } from '../myservices/book-apiservice';

@Component({
  selector: 'app-books-new',
  standalone: false,
  templateUrl: './books-new.html',
  styleUrl: './books-new.css',
})
export class BooksNew {
  book=new Book(); 
  books:any 
  errMessage:string='' 
  constructor(private _service: BookAPIService){ 
    this._service.getBooks().subscribe({ 
      next:(data)=>{this.books=data}, 
      error:(err)=>{this.errMessage=err} 
    }) 
  } 
  postBook() 
  { 
    alert("Tên sách=bookNam")
    this._service.postBook(this.book).subscribe({ 
      next:(data)=>{this.books=data}, 
      error:(err)=>{this.errMessage=err} 
}) 
} 
}
