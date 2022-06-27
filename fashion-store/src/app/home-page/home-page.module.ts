import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CompanySignatureComponent } from './company-signature/company-signature.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HomeBarComponent } from './home-bar/home-bar.component';

@NgModule({
  declarations: [
    TitleComponent,
    ShoppingCartComponent,
    CompanySignatureComponent,
    HomeBarComponent,
    HomeComponentComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponentComponent
  ]
})
export class HomePageModule { }
