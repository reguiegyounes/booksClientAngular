import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(public bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getAllbooks();
  }
  
  fillData(book:Book){
    this.bookService.book.id=book.id;
    this.bookService.book.title=book.title;
    this.bookService.book.author=book.author;
    this.bookService.book.numberOfPage=book.numberOfPage;
    this.bookService.book.publishedAt=book.publishedAt;
  }
  delete(id:number){
    this.bookService.deleteBook(id).subscribe(
      res=>{
        this.bookService.getAllbooks();
      },
      err=>{
        console.log('error delete[Book]')
      });
  }
}
