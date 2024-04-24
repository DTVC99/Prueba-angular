import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
  dataBooks:any[] = [];
  constructor() {
   }

   addBook(book:any){
    this.dataBooks.push(book)
   }

   getBook():any[] {
    return this.dataBooks
   }
}
