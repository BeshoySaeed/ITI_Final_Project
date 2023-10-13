import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/interface/items';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  selected_product_id: any ;
  data: any={}
 constructor(private router: ActivatedRoute,private service:ItemsService ) {
   this.selected_product_id = this.router.snapshot.params["id"];
   console.log(this.selected_product_id);
 }
}