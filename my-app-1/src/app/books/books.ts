import { Component } from '@angular/core';
import { BookAPIService } from '../myservices/book-apiservice';
import { Router } from '@angular/router';
import { IBook } from '../myservices/ibook';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  books:any; 
  errMessage:string='';
  selectedBook: IBook | null = null 
  constructor(
    private _service: BookAPIService,
    private router: Router)
  { 
    this._service.getBooks().subscribe({ 
      next:(data)=>{this.books=data}, 
      error:(err)=>{this.errMessage=err} 
    }) 
  }
  view_detail(id: string) {
  this.router.navigate(['/ex41', id]);
  } 

// deleteBook(book: IBook) {
//     if(confirm("Bạn có chắc muốn xóa: " + book.BookName + "?")) {
//       this._service.deleteBook(book.BookId).subscribe({
//         next: (res) => { this.books = res },
//         error: (err) => { console.log(err) }
//       })
//     }
//   }

show_update(id:any)
{
  this.router.navigate(['/ex45', id]);
}

request_delete(id:any)
{
  if(confirm("Are you sure you want to delete book with ID: " + id + "?")) 
    {
      this.deleteBook(id);
    }
}
deleteBook(bookId:any) 
  { 
    this._service.deleteBook(bookId).subscribe({ 
      next:(data)=>{this.books=data}, 
      error:(err)=>{this.errMessage=err} 
    }) 
  } 
}
