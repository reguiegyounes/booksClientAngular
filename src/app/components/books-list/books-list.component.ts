import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(public sBooks:BookService) { }

  ngOnInit(): void {
    this.sBooks.getAllbooks();
  }
  
  fillData(book:Book){
    this.sBooks.book.id=book.id;
    this.sBooks.book.title=book.title;
    this.sBooks.book.author=book.author;
    this.sBooks.book.numberOfPage=book.numberOfPage;
    this.sBooks.book.publishedAt=book.publishedAt;
  }
}
