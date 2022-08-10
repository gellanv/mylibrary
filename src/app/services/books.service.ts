import { Injectable } from '@angular/core';
import {BookPreviewInterface} from "../interface/book-preview-interface";
import {BookDetailsInterface} from "../interface/book-details-interface";
import {GlobalDataServicesService} from "../services/global-data.service"
import {AddBookInterface} from "../interface/add-book-interface";
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private globalData:GlobalDataServicesService) { }

  getAllBook():BookPreviewInterface[]{
   
    return this.globalData.allBooks;
  }

  getRecommendBook():BookPreviewInterface[]{
    return this.globalData.recommendBooks;
  }

  gerBookDetails(id:number):BookDetailsInterface {
    return this.globalData.allBookFullInformation.find(x=>x.id==id) as BookDetailsInterface;
  }  
  
  SetCurrentBook(idBook:number){
    this.globalData.curentBook=this.gerBookDetails(idBook); 
    return this.globalData.curentBook;
  }

  AddBook(book:AddBookInterface){
    var BookPreviewInterface:BookPreviewInterface ={"id":book.id, "title":book.title, "cover":book.cover, "rating": 0, "reviewsNumber": 0}
    this.globalData.allBooks.push(BookPreviewInterface)
  }
 
}