import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/club/login/login.component';
import { SignUpComponent } from './components/club/sign-up/sign-up.component';
import { NotFoundFallbackComponent } from './components/not-found-fallback/not-found-fallback.component';
import { HomePageComponent } from './components/home/home-page.component';
import { ShopComponent } from './components/shop/shop.component';
import { SquadPageComponent } from './components/squad/squad-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomePageComponent },
  { path: 'join-the-club', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'squad', component: SquadPageComponent },
  { path: 'shop', component: ShopComponent },
  { path: '**', component: NotFoundFallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
