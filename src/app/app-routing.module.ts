import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/authentication/login/login.component';
import { RegistrationComponent } from './_components/authentication/registration/registration.component';
import { HomeComponent } from './_components/home/home.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'auth/registration', component: RegistrationComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
