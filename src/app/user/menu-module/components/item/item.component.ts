import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/interface/items';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  
  @Input() data:any={}
  @Output() item = new EventEmitter();
  addButton:boolean=false;
  amount:number=0;
  constructor(){}
  
  ngOnInit(){}
  
  add(){
  this.item.emit({item:this.data , quantity:this.amount})
  }

  generateRatingStars() {
    const numberOfStars = Math.floor(this.data.stars);
    const stars = Array.from({length: 5}, (_, index) => index < numberOfStars ? 'filled-star' : '');
  
    return stars;
  }


  }
  
