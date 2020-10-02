import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User;
  registrationForm: FormGroup;
  validationErrors: string[];
  confirmedPassword: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.registrationForm = new FormGroup({
      userName: new FormControl(this.user.userName, [Validators.required, Validators.minLength(4)]),
      userEmail: new FormControl(this.user.userEmail, [Validators.required]),
      userPassword: new FormControl(this.user.userPassword, [Validators.required]),
      userConfirmedPassword: new FormControl(this.confirmedPassword, [Validators.required])
    });
  }

  get userName(): AbstractControl { return this.registrationForm.get('userName'); }
  get userEmail(): AbstractControl { return this.registrationForm.get('userEmail'); }

  onRegister(): void {
    this.validateInput();
    console.warn(this.registrationForm.value)
  }

  validateInput(): void {


  }




}
