import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';

import { LogInComponent } from './log-in/log-in.component';
import { N10t04n2020Component } from './n10t04n2020/n10t04n2020.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    N10t04n2020Component,
    RegisterComponent,
    HomePageComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
