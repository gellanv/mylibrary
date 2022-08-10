import { Input, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {BookPreviewInterface} from "../interface/book-preview-interface"
import { ViewBookComponent } from '../view-book/view-book.component';
import {BooksService} from "../services/books.service";

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  @Input() bookpreview: BookPreviewInterface={};
  imageUrl = 'data:image/jpeg;base64,';  
  constructor(public mdialog: MatDialog, public booksService: BooksService) { }

  ngOnInit(): void {
    this.imageUrl = 'data:image/jpeg;base64,' + this.bookpreview.cover;   
  }

  OpenPopUp(){
    this.mdialog.open(ViewBookComponent, {
      enterAnimationDuration: '800ms',
      exitAnimationDuration: '800ms',
      width:'50%',
      data: {
        id: this.bookpreview.id
      }
    });
}
EditBook(){
 this.booksService.SetCurrentBook(this.bookpreview.id as number);
}
}