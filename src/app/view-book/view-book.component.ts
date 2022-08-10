import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookDetailsInterface } from '../interface/book-details-interface';
import {BooksService} from "../services/books.service";
@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  bookDetails: BookDetailsInterface ={};
  public id :number=0;
  imageUrl = 'data:image/jpeg;base64,';  


  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}, private booksService: BooksService) { 
    this.bookDetails=this.booksService.gerBookDetails(this.data.id);
    this.id=this.data.id;
  }

  ngOnInit(): void {
    this.bookDetails=this.booksService.gerBookDetails(this.data.id);
    this.imageUrl = 'data:image/jpeg;base64,' + this.bookDetails.cover; 
  }
}
