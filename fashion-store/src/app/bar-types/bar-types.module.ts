import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBarComponent } from './home-bar/home-bar.component';
import { PageBarComponent } from './page-bar/page-bar.component';



@NgModule({
  declarations: [
    HomeBarComponent,
    PageBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BarTypesModule { }
