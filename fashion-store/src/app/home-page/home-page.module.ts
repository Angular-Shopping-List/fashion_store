import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CompanySignatureComponent } from './company-signature/company-signature.component';



@NgModule({
  declarations: [
    TitleComponent,
    ShoppingCartComponent,
    CompanySignatureComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TitleComponent,
    ShoppingCartComponent,
    CompanySignatureComponent
  ]
})
export class HomePageModule { }
