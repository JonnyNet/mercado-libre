import { Component, OnInit } from '@angular/core';
import { ShopStoreService } from '../../services/shop-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private readonly shopStoreService: ShopStoreService) { }

  onSearch(search: string) {
    this.shopStoreService.navigateToItem(search);
  }
}
