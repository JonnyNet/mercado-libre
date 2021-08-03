import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopStoreService } from '../../services/shop-store.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  search!: string;

  constructor(
    private route: ActivatedRoute,
    private readonly shopStoreService: ShopStoreService) {
    this.route.queryParams.subscribe(params => {
      this.search = params.search;
    });
  }

  ngOnInit(): void {
    console.log(this.search);
  }

  onSearch(search: string) {
    this.shopStoreService.navigateToItem(search);
  }
}
