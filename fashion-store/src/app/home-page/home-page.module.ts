import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../page-header/page-header.module';
import { TableComponent } from './table/table.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddClothingItemComponent } from './add-clothing-item/add-clothing-item.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MatInputModule} from '@angular/material/input';
import{MatSelectModule} from '@angular/material/select';
import { HomePageRoutingModule } from './home-page-routing.module';
import {MatTableModule} from '@angular/material/table';
import { BarTypesModule } from '../bar-types/bar-types.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    TableComponent,
    DashboardComponent,
    AddClothingItemComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    PageHeaderModule,
    BarTypesModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule ,
    MatTableModule,
    MatCardModule 
  ]
})
export class HomePageModule { }
