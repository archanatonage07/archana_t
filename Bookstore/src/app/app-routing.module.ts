import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { AddbookComponent } from './book/addbook/addbook.component';
import { MeaningfulGuard } from './meaningful.guard';
import { Meaningful1Guard } from './meaningful1.guard';


const routes: Routes = [
  // { path: 'book', loadChildren: () => import('./book/book.module').then(be => be.BookModule), canActivate: [MeaningfulGuard, Meaningful1Guard] },

  // { path: 'signup', component: SignupComponent },

  // {
  //   path: '', redirectTo: 'signup', pathMatch: 'full',
  //   canActivate: [MeaningfulGuard],
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
