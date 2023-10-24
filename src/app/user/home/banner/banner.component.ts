import { Component } from '@angular/core';
import { PhotoService } from '../service/photoservice.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { ItemService } from 'src/app/services/ItemService/item.service';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class BannerComponent {
      images: any[] | undefined;
      items: any;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService, private itemHttp: ItemService) {}

    ngOnInit() {
        this.photoService.getData().then((images) => {
            this.images = images;
        });
        this.itemHttp.getItems().subscribe(items =>{
          this.items = items;
          console.log(this.items, "hello")
        });

    }

}
