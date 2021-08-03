import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsComponent } from './pages/items/items.component';


@NgModule({
  declarations: [
    HomeComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
  ]
})
export class ShopModule { }
