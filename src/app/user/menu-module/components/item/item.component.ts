import { ItemAddition } from './../../../../interface/item-addition';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Item } from 'src/app/interface/items';
import { OrderService } from 'src/app/services/OrderService/order.service';
import { UserFavService } from 'src/app/services/userFav/user-fav.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [MessageService],
})
export class ItemComponent {
  @Input() data: any = {};
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  amount: number = 0;
  isFavourite: boolean = false;
  userId!: number;
  favItems: any;
  existingItem: any;
  displayPosition!: boolean;
  position!: string;

  // pupop

  value!: string;
  constructor(
    private httpFav: UserFavService,
    private primengConfig: PrimeNGConfig,
    private orderService: OrderService,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    console.log(this.data);
    this.httpFav.getAll(1).subscribe((data) => {
      this.favItems = data.data;
      this.existingItem = this.favItems.find(
        (favItem: any) => favItem.item_id === this.data.id
      );
      if (this.existingItem) {
        this.isFavourite = true;
      }
    });

    this.primengConfig.ripple = true;
  }

  showPositionDialog(position: string, data:any) {
    if(data.itemAdditions.length > 0) {
      this.position = position;
      this.displayPosition = true;
    } else {
      this.submitAdditions(data.id);
    }
  }

  add() {
    this.item.emit({ item: this.data, quantity: this.amount });
  }

  generateRatingStars() {
    const numberOfStars = Math.floor(this.data.stars);
    const stars = Array.from({ length: 5 }, (_, index) =>
      index < numberOfStars ? 'filled-star' : ''
    );

    return stars;
  }

  addAddition(id: number) {
    console.log(id)
  }

  submitAdditions(itemId: number) {
    this.displayPosition = false;
    console.log(itemId);
    const item = {
      item : {
        item_id: itemId,
        quantity: 1,
        additions: [
          {
            addition_id: 2,
          },
          {
            addition_id: 1,
          },
        ],
      },
    };

    this.orderService.addOrder(item).subscribe((response: any) => {
      console.log(response);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Item is added to cart',
      });
    });
  }

  addFav(item: any) {
    this.isFavourite = !this.isFavourite;
    if (this.isFavourite) {
      this.httpFav
        .add({
          item_id: item.id,
          user_id: 1,
          item: item,
        })
        .subscribe();
    } else {
      const favId = this.favItems.filter((e: any) => e.item_id == item.id)[0]
        .id;
      this.httpFav.delete(favId).subscribe();
    }
  }
}
