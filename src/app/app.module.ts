import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_components/authentication/login/login.component';
import { RegistrationComponent } from './_components/authentication/registration/registration.component';
import { HeaderComponent } from './_components/structure/header/header.component';
import { FooterComponent } from './_components/structure/footer/footer.component';
import { NavComponent } from './_components/structure/nav/nav.component';
import { HomeComponent } from './_components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './_services/tokenInterceptor.service';
import { CommonModule } from '@angular/common';
import { CurrenciesComponent } from './_components/currencies/currencies.component';
import { MoviesComponent } from './_components/movies/movies.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CurrenciesComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
