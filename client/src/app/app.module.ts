import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { MaterialModule } from './shared/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PagesComponent } from './components/pages/pages.component';
import { ReviewCycleComponent } from './components/pages/home/review-cycle/review-cycle.component';
import { ParticipantsComponent } from './components/pages/home/participants/participants.component';
import { QuestionnairesComponent } from './components/pages/home/questionnaires/questionnaires.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    PagesComponent,
    ReviewCycleComponent,
    ParticipantsComponent,
    QuestionnairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
