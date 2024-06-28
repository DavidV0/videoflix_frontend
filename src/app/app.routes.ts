import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordResetRequestComponent } from './components/password-reset-request/password-reset-request.component';
import { PasswordResetConfirmComponent } from './components/password-reset-confirm/password-reset-confirm.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { DataPolicyComponent } from './components/data-policy/data-policy.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'password-reset', component: PasswordResetRequestComponent },
  {
    path: 'password-reset/confirm/:uidb64/:token',
    component: PasswordResetConfirmComponent,
  },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-policy', component: DataPolicyComponent },
];
