import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home-page/dashboard/dashboard.component';
import { Header1Component } from './page-header/header1/header1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'auth',
    pathMatch:'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
   {
    path:'home-page',
    loadChildren: () => import('./home-page/home-page.module').then((m) => m.HomePageModule),
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
