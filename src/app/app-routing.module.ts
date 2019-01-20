import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from 'src/app/users/users.component';
import { EventsComponent } from 'src/app/events/events.component';
import { TicketsComponent } from 'src/app/tickets/tickets.component';
import {LoginComponent} from 'src/app/login/login.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  {path: 'Tickit', component: TicketsComponent, canActivate: [AuthGuard] },
  {path: 'Event', component: EventsComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent}

  // {path: 'Login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
