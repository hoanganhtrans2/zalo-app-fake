import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {LogInComponent } from '../app/log-in/log-in.component';
import { RegisterComponent } from '../app/register/register.component';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { ListItemChatComponent } from '../app/home-page/list-item-chat/list-item-chat.component'
import { ListItemContactComponent } from './home-page/list-item-contact/list-item-contact.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { 
    path: 'login', component: LogInComponent
  },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'dashboard', component: HomePageComponent, canActivateChild: [AuthGuard],
    children:[
      {path: '', redirectTo: 'chat', pathMatch: 'full'},
      { path: 'chat', component: ListItemChatComponent },
      { path: 'contact', component: ListItemContactComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
