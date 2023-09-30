import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  constructor(private messageService: MessageService) { }
  options: any;

  // overlays: any[];
  ngOnInit() {
      this.options = {
          center: { lat: 22.72105, lng: 88.373459 },
          zoom: 12,
      };
  }
}