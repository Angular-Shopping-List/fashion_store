import { Component, OnInit } from '@angular/core';
import { ClothingItem, Gender } from '../clothingItemInterface';
import { TableService } from '../table.service';
import { MatDialog } from '@angular/material/dialog';
import { AddClothingItemComponent } from '../add-clothing-item/add-clothing-item.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public clothingItems : ClothingItem[]=[];
  public genderList=Gender;
  public searchValue:string="";
  public displayedColumns: string[]=['name','size','gender','brand','price']
 
  constructor(private dog:TableService,public dialog:MatDialog) { }
  
  ngOnInit(): void {
    this.getDataTable();
    //console.log(this.genderList);
  }
  getDataTable(){
    this.clothingItems = this.dog.getTableList();
  }
  openModal(){
   const dialogRef = this.dialog.open(AddClothingItemComponent)
   console.log(this.searchValue);
  }
  sortByPrice(){
    this.dog.sortByPrice();
  }
  search(){
   this.clothingItems=this.dog.searchedName(this.searchValue);
  }
  addData(){}
  removeData(){}
}
