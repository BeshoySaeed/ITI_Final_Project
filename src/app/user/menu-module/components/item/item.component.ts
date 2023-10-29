import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Item } from 'src/app/interface/items';
import { UserFavService } from 'src/app/services/userFav/user-fav.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
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
  displayPosition !: boolean; 
  position !: string; 

  // pupop 

  value!: string;
  constructor(private httpFav: UserFavService, private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    console.log(this.data)
    this.httpFav.getAll(1).subscribe((data) => {
      this.favItems = data.data;
      this.existingItem = this.favItems.find(
        (favItem: any) => favItem.item_id === this.data.id
      );
      if(this.existingItem){
        this.isFavourite = true
      }
    });

    this.primengConfig.ripple = true; 

  }

  

  showPositionDialog(position: string) { 
      this.position = position; 
      this.displayPosition = true; 
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

  addAddition(id: number)
  {

  }

  submittAdditions(itemId: number)
  {
    this.displayPosition = false
    console.log(itemId)
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
    }else{
      const favId = (this.favItems.filter((e:any) => e.item_id == item.id))[0].id
      this.httpFav.delete(favId).subscribe();
    }
  }
}
