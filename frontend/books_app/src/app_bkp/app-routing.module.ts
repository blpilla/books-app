import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { WeatherComponent } from './components/weather/weather.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'books', component: BooksListComponent, canActivate: [AuthGuard] },
  { path: 'books/new', component: BookFormComponent, canActivate: [AuthGuard] },
  { path: 'books/:id', component: BookDetailComponent, canActivate: [AuthGuard] },
  { path: 'books/edit/:id', component: BookFormComponent, canActivate: [AuthGuard] },
  { path: 'weather', component: WeatherComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
