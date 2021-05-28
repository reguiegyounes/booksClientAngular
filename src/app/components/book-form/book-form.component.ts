import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  constructor(public bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.book={
      id:0,
      title:'',
      author:'',
      numberOfPage:0,
      publishedAt:new Date().toLocaleString()
    }
  }

  submit(){
    this.bookService.postBook().subscribe(
      res=>{
        this.bookService.getAllbooks();
      },
      err=>{
        console.log('error post[Book]')
      }
    );
  }

}
/**
 * this.bookService.book={
      id:0,
      title:'',
      author:'',
      numberOfPage:0,
      publishedAt:new Date()
    }
 */