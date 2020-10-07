import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/authentication/login/login.component';
import { RegistrationComponent } from './_components/authentication/registration/registration.component';
import { CurrenciesComponent } from './_components/currencies/currencies.component';
import { HomeComponent } from './_components/home/home.component';
import { MoviesComponent } from './_components/movies/movies.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'auth/registration', component: RegistrationComponent, canActivate: [AuthGuard] },

  {
    path: '', component: HomeComponent, children: [
      { path: 'movies', component: MoviesComponent, },
      { path: 'currencies', component: CurrenciesComponent, },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
