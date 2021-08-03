import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from 'src/app/shared/store/store';
import { URLS } from '../constans/urls';
import { ShopState } from '../models/shop-state';

@Injectable({
  providedIn: 'root'
})
export class ShopStoreService extends Store<ShopState>{

  constructor(private router: Router) {
    super({
      items: [],
    });
  }

  navigateToItem(search: string) {
    this.router.navigate([URLS.ITEM], { queryParams: { search } });
  }
}
