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
  amount: number = 0;
  isFavourite: boolean = false;
  userId: any = localStorage.getItem('user_id')
  favItems: any;
  existingItem: any;
  displayPosition!: boolean;
  position!: string;
  newItem: any = {
    item: {
      quantity: 1,
      additions: [],
    },
  };

  // pupop

  value!: string;
  constructor(
    private httpFav: UserFavService,
    private primengConfig: PrimeNGConfig,
    private orderService: OrderService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
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

  showPositionDialog(position: string, data: any) {
    if (localStorage.getItem('token')) {
      if (data.itemAdditions.length > 0) {
        this.position = position;
        this.displayPosition = true;
        setTimeout(() => {
          this.resetAdditionButton();
        }, 0);
      } else {
        this.newItem.item.additions = [];
        this.submitAdditions(data.id);
      }
    } else {
      this.router.navigate(['/login']);
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

  addAddition(id: number, index: number) {
    let addButton: any = document.getElementsByClassName('add-button')[index];
    addButton.classList.add('hidden');

    let removeButton: any =
      document.getElementsByClassName('remove-button')[index];
    removeButton.classList.remove('hidden');

    let addition = {
      addition_id: id,
    };
    this.newItem.item.additions.push(addition);
  }

  removeAddition(id: number, index: number) {
    let addButton: any = document.getElementsByClassName('add-button')[index];
    addButton.classList.remove('hidden');

    let removeButton: any =
      document.getElementsByClassName('remove-button')[index];
    removeButton.classList.add('hidden');

    let addition = {
      addition_id: id,
    };
    this.removeAdditionFromArray(addition, this.newItem.item.additions);
  }

  removeAdditionFromArray(addition: any, additions: any) {
    const index = additions.findIndex(
      (item: any) => item.addition_id === addition.addition_id
    );
    if (index !== -1) {
      additions.splice(index, 1);
    }
  }

  resetAdditionButton() {
    let addButtons = document.getElementsByClassName('add-button');
    let removeButtons = document.getElementsByClassName('remove-button');

    for (let i = 0; i < addButtons.length; i++) {
      addButtons[i].classList.remove('hidden');
    }

    for (let i = 0; i < removeButtons.length; i++) {
      removeButtons[i].classList.add('hidden');
    }
  }

  submitAdditions(itemId: number) {
    this.displayPosition = false;
    this.newItem.item.item_id = itemId;

    this.orderService.addOrder(this.newItem).subscribe((response: any) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Item is added to cart',
      });
      this.newItem.item.additions = [];
      localStorage.setItem('cart', 'true');
    });
  }

  addFav(item: any) {
    this.isFavourite = !this.isFavourite;
    if (this.isFavourite) {
      this.httpFav
        .add({
          item_id: item.id,
          user_id: this.userId,
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
