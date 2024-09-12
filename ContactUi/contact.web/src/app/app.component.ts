import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contacts } from '../models/contaxt.model';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, AsyncPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  http = inject(HttpClient);

  contactsForm = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string | null>(null),
    phoneNumber: new FormControl<string>(''),
    favorite: new FormControl<boolean>(false)
  })

  contacts$ = this.getContacts();

  onFormSubmit()
  {
    console.log(this.contactsForm.value);
  }

  private getContacts(): Observable<Contacts[]>
  {
    return this.http.get<Contacts[]>('https://localhost:7100/api/Contacts');
    
  }
}
