import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/ItemService/item.service';
import { UserFavService } from 'src/app/services/userFav/user-fav.service';


@Component({
  selector: 'app-user-fav',
  templateUrl: './user-fav.component.html',
  styleUrls: ['./user-fav.component.scss']
})
export class UserFavComponent {
  items : any;
  userId: any;
  constructor(private httpFav: UserFavService){
    this.userId = localStorage.getItem('user_id');
  }

  ngOnInit()
  {
    this.httpFav.getAll(this.userId).subscribe((data) =>  
      {
        this.items = data.data;
        console.log(this.items)
      }
    )
  }

  unFavourite(id : number)
  {
    this.httpFav.delete(id).subscribe()
    this.items = this.items.filter((e: any) => e.id != id);
  }

}
