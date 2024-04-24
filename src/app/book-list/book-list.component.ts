import { Component } from '@angular/core';
import { ServiceDataService } from '../service-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  listBooks: any[] = []
 

  constructor(private dataBooks : ServiceDataService){

    this.listBooks = this.dataBooks.getBook();

  }
}
