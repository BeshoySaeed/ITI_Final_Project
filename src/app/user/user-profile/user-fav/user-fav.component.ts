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
  constructor(private httpFav: UserFavService){}

  ngOnInit()
  {
    this.httpFav.getAll(1).subscribe((data) =>   // assume userid = 1
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
