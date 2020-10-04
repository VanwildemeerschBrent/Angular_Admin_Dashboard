import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  registrationForm: FormGroup;

  isSubmitted: boolean = false;
  isUserRegistered: boolean = false;
  isUserAlreadyRegistered: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
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
      const user: User = new User();
      user.name = this.registrationForm.get('userName').value;
      user.email = this.registrationForm.get('userEmail').value;
      user.password = this.registrationForm.get('userPassword').value;
      this.authenticationService.register(user).subscribe(res => {
        console.log('Res:', res);
        this.registrationForm.reset();
        this.isUserRegistered = true;
        this.isSubmitted = false;
      }, (error) => {
        if (error.status === 400) {
          this.isUserAlreadyRegistered = true;
          this.isSubmitted = false;
        }
      });
    }
  }
}
