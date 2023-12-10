import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundFallbackComponent } from './components/not-found-fallback/not-found-fallback/not-found-fallback.component';
import { LoginComponent } from './components/club/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'join-the-club', pathMatch: 'full' },
  { path: 'join-the-club', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundFallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
