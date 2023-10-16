import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  items: any[] = [];

  ngOnInit() {
    this.items = [
        
      {
        Name:'Meat',
        Image:'../../../assets/images/download.jpeg',
        link:'#'
      },
      {
        Name:'Pizza',
        Image:'../../../assets/images/download (1).jpeg',
        link:'#'
      },     {
        Name:'Fish',
        Image:'../../../assets/images/images.jpeg',
        link:'#'
      },     {
        Name:'Salat',
        Image:'../../../assets/images/images (1).jpeg',
        link:'#'
      },
      ];
    }
}
