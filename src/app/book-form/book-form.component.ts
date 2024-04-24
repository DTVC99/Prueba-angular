import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceDataService } from '../service-data.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
    useForm:FormGroup = new FormGroup({});

    constructor(private dataBooks: ServiceDataService){

      this.useForm = new FormGroup({
        name: new FormControl ('', Validators.required)
      })


      
      this.dataBooks.addBook(this.useForm)
      
    }

      onsubmit(){
        if(this.useForm.valid){
          const name= this.useForm.get('name')?.value;
          this.dataBooks.addBook(name)
        }
      }
}
