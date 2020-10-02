import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
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

  isSubmitted: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user = new User();
    this.registrationForm = this.formBuilder.group({
      userName: new FormControl(this.user.userName, [Validators.required, Validators.minLength(2)]),
      userEmail: new FormControl(this.user.userEmail, [Validators.required, Validators.email]),
      userPassword: new FormControl(this.user.userPassword, [Validators.required, Validators.minLength(6)]),
      userConfirmedPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get userName(): AbstractControl { return this.registrationForm.get('userName'); }

  get userEmail(): AbstractControl { return this.registrationForm.get('userEmail'); }

  get userPassword(): AbstractControl { return this.registrationForm.get('userPassword'); }

  get userPasswordConfirmed(): AbstractControl { return this.registrationForm.get('userConfirmedPassword'); }

  onRegister(): void {
    this.isSubmitted = true;
    if (this.registrationForm.valid) {
      
    } 
  }
}
