import { Injectable } from '@angular/core';
import { ClothingItem, Gender } from './clothingItemInterface';
@Injectable({
  providedIn: 'root'
})
export class TableService {
   private clothingItem: ClothingItem[]=[
    {name:"Mark",size :2,gender:Gender.M,brand:"Adi",price:12},
    {name:"Iulian",size :3,gender:Gender.M, brand:"Adelin", price:200},
    {name:"Anda",size :1,gender:Gender.F,brand:"Laura", price:104},
    {name:"Canu",size :4,gender:Gender.M,brand:"Adi",price:160},
  ];
  constructor() { }
  public getTableList():ClothingItem[]{
    return this.clothingItem;
  }
  public set(dogsList: ClothingItem[] ){
     this.clothingItem=dogsList;
 }
  public add(dog: ClothingItem){
    
    this.clothingItem.push(dog);
     return this.clothingItem;
 }
 private dogComparer(clothingItem1:ClothingItem, clothingItem2:ClothingItem){
    return clothingItem1.price-clothingItem2.price;
 }
 public sortByPrice(){
  
  return this.clothingItem.sort(this.dogComparer)
  
 }
 public searchedName(name:string){
    return this.clothingItem.filter(clothingItem=>clothingItem.name?.includes(name));
     
 }
 

}
