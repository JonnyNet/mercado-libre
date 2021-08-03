import { Injectable } from '@angular/core';
import { Store } from 'src/app/shared/store/store';
import { GLOBAL } from '../constans/global';
import { ShopState } from '../models/shop-state';

@Injectable({
  providedIn: 'root'
})
export class ShopStoreService extends Store<ShopState>{

  constructor() {
    super({
      search: GLOBAL.EMPTY,
      items: [],
    });
  }
}
