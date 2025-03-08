import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonFormComponent } from './person-form/person-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule, 
    PersonListComponent,  // 👈 Import components here
    PersonFormComponent   // 👈
  ]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  showForm = false;
  show=false;

  toggleForm() {
    this.showForm = !this.showForm;
    this.show = !this.show;
  }
  closeForm() {
    this.showForm = false; 
  }
}