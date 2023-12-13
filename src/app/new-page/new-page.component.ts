import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {
  showTodoList = true; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showTodoList = false;
      }
    });
  }
  user = { username: '', email: '', password: '' };

  onSubmit(registrationForm: NgForm): void {
    if (registrationForm.valid) {
        console.log('Form submitted with data:', this.user);
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
