import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  checkDate: any;
  todayDate:any;

  ngOnInit(){
    this.checkEndDate();  //check if subscription is ended or not 
  }

  checkEndDate()
  {
    if(localStorage.getItem('subscribe_id')!=null){
      
      this.todayDate =new Date();
      this.checkDate = localStorage.getItem('endDate');
      if(this.todayDate>=this.checkDate){

      localStorage.removeItem('subscribe_id');

      }
    }
    
  }
}
