import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClothingItem } from '../clothingItemInterface';
import { TableService } from '../table.service';
import { CustomValidators } from '../custom-validators-cloth-item';

@Component({
  selector: 'app-add-clothing-item',
  templateUrl: './add-clothing-item.component.html',
  styleUrls: ['./add-clothing-item.component.scss']
})
export class AddClothingItemComponent implements OnInit {

  form!:FormGroup
  constructor(private clothesService: TableService) { }
  
  ngOnInit(): void {
    this.createForm();
  }
  createForm()
  {
    this.form=new FormGroup(
     {name:new FormControl("", Validators.required) ,
      age:new FormControl(null, Validators.required),
      gender:new FormControl("", Validators.required) ,
      owner:new FormControl("", [CustomValidators.humanName,Validators.required]),
      price: new FormControl(null, CustomValidators.myValidator)}
      );
  }
  addClothItem(){

    const dog: ClothingItem={
      name:this.clothingItemName?.value,
      size:this.clothingItemSize?.value,
      brand:this.clothingItemBrand?.value,
      gender:this.clothingItemGender?.value,
      price:this.clothingItemPrice?.value,
    }
    console.log(dog);
    console.log(this.form);
    
    this.clothesService.add(dog);
  }
   
  get clothingItemName(){
    return this.form.get("name");
  }
  get clothingItemSize(){
    return this.form.get("size");
  }
  get clothingItemGender(){
    return this.form.get("gender");
  }
  get clothingItemBrand(){
    return this.form.get("brand");
  }
  get clothingItemPrice(){
    return this.form.get("price");
  }

}
