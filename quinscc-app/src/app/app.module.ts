import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundFallbackComponent } from './components/not-found-fallback/not-found-fallback.component';
import { LoginComponent } from './components/club/login/login.component';
import { SignUpComponent } from './components/club/sign-up/sign-up.component';
import { ShopComponent } from './components/shop/shop.component';
import { HomePageComponent } from './components/home/home-page.component';
import { PlayerCardComponent } from './components/squad/player-card/player-card.component';
import { SquadPageComponent } from './components/squad/squad-page.component';
import { StaffCardComponent } from './components/squad/staff-card/staff-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundFallbackComponent,
    LoginComponent,
    SignUpComponent,
    ShopComponent,
    SquadPageComponent,
    PlayerCardComponent,
    StaffCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    // Angular Material Modules
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
