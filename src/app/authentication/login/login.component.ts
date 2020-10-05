import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user.model';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted: boolean = false;
  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required])
    });
  }

  get userEmail(): AbstractControl { return this.loginForm.get('userEmail'); }
  get userPassword(): AbstractControl { return this.loginForm.get('userPassword'); }

  onLogin(): void {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      const credentials = {
        email: this.loginForm.get('userEmail').value,
        password: this.loginForm.get('userPassword').value
      }
      this.authenticationService.login(credentials)
        .subscribe((res) => this.router.navigateByUrl('/'), (error) => console.error('Error:', error))
    }
  }

}
