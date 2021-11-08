import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SinginComponent } from './component/singin/singin.component';

import {MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { SingupComponent } from './component/singup/singup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ClassficationDialogComponent } from './component/classification-dialog/classfication-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {
  JwtHelperService,
  JWT_OPTIONS
} from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SinginComponent,
    SingupComponent,
    DashboardComponent,
    ClassficationDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,MatTabsModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS
   },
   JwtHelperService
  ],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule]
})
export class AppModule { }
