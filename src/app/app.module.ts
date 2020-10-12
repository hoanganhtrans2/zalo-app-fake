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
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemChatComponent } from './home-page/list-item-chat/item-chat/item-chat.component';
import { ListItemChatComponent } from './home-page/list-item-chat/list-item-chat.component';
import { ListItemContactComponent } from './home-page/list-item-contact/list-item-contact.component';
import { AuthGuard } from './auth/auth.guard';
import { DialogUpdateComponent } from './home-page/dialog-update/dialog-update.component';




@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,

    RegisterComponent,
    HomePageComponent,
    ItemChatComponent,
    ListItemChatComponent,
    ListItemContactComponent,
    DialogUpdateComponent
  ],
  imports: [
    MatDatepickerModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
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
    MatSelectModule,
    MatListModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
