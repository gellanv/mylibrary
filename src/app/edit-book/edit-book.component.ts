import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { NgModel} from '@angular/forms';
import {GlobalDataServicesService} from "../services/global-data.service";
import {BookDetailsInterface} from "../interface/book-details-interface";
import {BooksService} from "../services/books.service";
import {AddBookInterface} from "../interface/add-book-interface";
import {Subject} from 'rxjs';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  cardImageBase64:string="";
  //someNewNameFrom: NgForm | null = null;
  
  public textAction:string = "";
  public curentBook:BookDetailsInterface = {} 
  constructor(private globalData:GlobalDataServicesService, private booksService: BooksService) {  
    this.curentBook=this.globalData.curentBook;    
  }
  
  ngOnInit(): void {
    this.textAction=this.globalData.actionBook;
    this.curentBook=this.globalData.curentBook;
  }

  clearForm(myForm: NgForm){  
    this.curentBook = {};
    this.globalData.curentBook={};
    this.textAction="Add book";
    myForm.reset();
}
  
  submit(myForm: NgForm){ 
  this.textAction="Add book";
  //Onload doesn't work(
   /* var cover:unknown;
    var filePath=myForm.value.cover;
    const reader = new FileReader();
    reader.readAsDataURL(filePath)

    reader.onload = (e: any) => {
          const image = new Image();
          image.src = filePath;
          image.onload = rs => {                
            const imgBase64Path = e.target.result;
            this.cardImageBase64 = imgBase64Path; 
            this.textAction= imgBase64Path;          
          };
      };  */

    var book:AddBookInterface = {
     "id":myForm.value.id,
     "title":myForm.value.title,
     "cover":this.cardImageBase64,
     "genre": myForm.value.cover,
     "author": myForm.value.author,
     "content": myForm.value.content,
    }
    this.booksService.AddBook(book);
    myForm.reset();
  }

}