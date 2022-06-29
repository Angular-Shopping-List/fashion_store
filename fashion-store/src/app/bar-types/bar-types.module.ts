import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBarComponent } from './home-bar/home-bar.component';
import { PageBarComponent } from './page-bar/page-bar.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomeBarComponent,
    PageBarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[HomeBarComponent,PageBarComponent]
})
export class BarTypesModule { }
