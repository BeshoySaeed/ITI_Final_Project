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

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}