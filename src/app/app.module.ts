import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './events/events.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicAuthInterceptor } from 'src/app/basic-auth.interceptor';
import { ErrorInterceptor } from 'src/app/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    EventsComponent,
    TicketsComponent
    ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
