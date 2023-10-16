import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {
  items: any[] = [];
  responsiveOptions: any[] | undefined;
  @ViewChild('carousel') carousel: any;
  startAutoplay() {
    this.carousel.startAutoplay();
  }
  ngOnInit() {
    this.items = [
      {
        Name: 'Sponsor-1',
        Image: '../../../assets/images/sponser.png',
        link: '#'
      },
      {
        Name: 'Sponsor-1',
        Image: '../../../assets/images/sponser.png',
        link: '#'
      },
      {
        Name: 'Sponsor-1',
        Image: '../../../assets/images/sponser.png',
        link: '#'
      },
      {
        Name: 'Sponsor-1',
        Image: '../../../assets/images/sponser.png',
        link: '#'
      },
      {
        Name: 'Sponsor-1',
        Image: '../../../assets/images/sponser.png',
        link: '#'
      },
      {
        Name: 'Sponsor-1',
        Image: '../../../assets/images/sponser.png',
        link: '#'
      },
      {
        Name: 'Sponsor-1',
        Image: '../../../assets/images/sponser.png',
        link: '#'
      },
      {
        Name: 'Sponsor-1',
        Image: '../../../assets/images/sponser.png',
        link: '#'
      }
    ];

  
  }
}