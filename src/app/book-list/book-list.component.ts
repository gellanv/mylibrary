import { Component, OnInit } from '@angular/core';
import {BooksService} from "../services/books.service";
import {BookPreviewInterface} from "../interface/book-preview-interface"
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  listBook: BookPreviewInterface[]=[];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.listBook = this.booksService.getAllBook();
  }
  getRecommend(): void {
    this.listBook = this.booksService.getRecommendBook();
  } 
  
}