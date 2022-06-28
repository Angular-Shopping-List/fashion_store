import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Header1Component } from './page-header/header1/header1.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {path: '',
   component:Header1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
