import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url:string="http://localhost:56158/api/Books";
  books: Book[] = [];
  book!: Book;



  constructor(private http:HttpClient) { 

  }
  async getAllbooks(){
    this.books= await this.http.get<Book[]>(this.url).toPromise();
    return this.books;
  }
  postBook(){
    console.log(this.book);
    return this.http.post(this.url,this.book)
  }


}
