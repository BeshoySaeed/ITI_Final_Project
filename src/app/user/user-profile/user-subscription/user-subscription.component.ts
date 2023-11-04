import { Component } from '@angular/core';
import { SubscriptionsService } from 'src/app/services/Subscriptions/subscriptions.service';
import { UserService } from 'src/app/services/user-service/user.service';

interface Order {
  id: number;
  price: number;

}

@Component({
  selector: 'app-user-subscription',
  templateUrl: './user-subscription.component.html',
  styleUrls: ['./user-subscription.component.scss']
})
export class UserSubscriptionComponent {

  orders: Order[] = [
    {
      id: 1,
      price: 40,
    },
    {
      id: 2,
      price: 30,
    },
    {
      id: 3,
      price: 120,
    },
    {
      id: 4,
      price: 250,
    },
  ];

   total =0 ;    


  subId:any;    //get subscribe id from local storage 
 // subId= localStorage.getItem('subscribe_id');
  subscribeObject:any=[];
  currentDate : any ;
  endDate: any;
  checkDate: any;
  todayDate:any;
  duration: any;
  check:any = null;
  userId=1;
  subscriptionData : any ={

  };

  constructor(private subService: SubscriptionsService, private userService: UserService) {}
  
  ngOnInit(){
    this.getSub();
    this.getDate();
    this.sumPrice();
    this.checkEndDate();
    this.checkSub();
  }


  getSub(){
    /*
    this.userService.getUserByID(this.userId).subscribe((response: any)=> {
      this.subId = response.subscribe_id;
    }); 
    if(this.subId){
      this.subService.getById(this.subId).subscribe((subData: any) => {
        this.subscribeObject = subData.data;
      })
    }
   */

    if(localStorage.getItem('subscribe_id')){
     this.subId= localStorage.getItem('subscribe_id');
    this.subService.getById(this.subId).subscribe((subData: any) => {
      this.subscribeObject = subData.data;

    })
  }
  else {
    this.subscribeObject.name="None";
    this.subscribeObject.subscribe_value=0;
    this.subscribeObject.benefit="None";
    this.subscribeObject.discount_value=0;
    this.currentDate="None";
    this.endDate="None";
    this.total=0;
    

  }
  }

  getDate() {
    /*
    this.userService.getUserByID(this.userId).subscribe((response: any)=> {
      this.currentDate = response.start_date;
      this.endDate = response.end_date;
    }); 
    */
   this.currentDate=localStorage.getItem('startDate');
   this.endDate=localStorage.getItem('endDate');
 
  }



  sumPrice(){    
    /*
    this.userService.getUserByID(this.userId).subscribe((response: any)=> {
      this.subId = response.subscribe_id;
    });
    
    if(this.subId){
      for(let i=0; i<this.orders.length; i++){     //replace orders with history orders
        this.total+= this.orders[i].price;   
      }   
    }
    */
    if(localStorage.getItem('subscribe_id')){
    for(let i=0; i<this.orders.length; i++){     //replace orders with history orders
         this.total+= this.orders[i].price;   
    }  
  } 
  else{
    this.total=0;
  }
  }  

  checkEndDate()
  {
    /*
    this.userService.getUserByID(this.userId).subscribe((response: any)=> {
      this.subId = response.subscribe_id;
      this.checkDate = response.end_date;
    });

    if(this.subId){
      this.todayDate =new Date();
      if(this.todayDate>=this.checkDate){
        
        this.subscriptionData={
          subscribe_id : null,
          start_date :  null ,
          end_date : null     
        };

        this.userService.setSubIdValue(this.userId, this.subscriptionData).subscribe();

  
        }
    }
   */
    if(localStorage.getItem('subscribe_id')){
      console.log('check date')
      this.todayDate =new Date();
      this.checkDate = localStorage.getItem('endDate');
      if(this.todayDate>=this.checkDate){

      localStorage.removeItem('subscribe_id');
      localStorage.removeItem('startDate');
      localStorage.removeItem('endDate');
      localStorage.removeItem('discount_value');

      }
    }
    
  }

  checkSub(){
    if(localStorage.getItem('subscribe_id')){
      this.check=localStorage.getItem('subscribe_id');
    }
     /*
    this.userService.getUserByID(this.userId).subscribe((response: any)=> {
         this.check = response.subscribe_id;
    }); 
    */
  }
}
