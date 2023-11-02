import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { checkpass } from '../../register/confirmpass';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})


export class UserDataComponent {

  registerform: FormGroup;
  user: any;
  userId: any;
  
  constructor(private fb: FormBuilder, private httpUser: UserService){
    this.userId = localStorage.getItem('user_id')
    this.registerform = this.fb.group({
    name: ['', Validators.required],
    lname: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    Phone: ['', [Validators.required, Validators.pattern( /^(010|011|012|015)\d{8}$/)]],
    city : [''],
    area: [''],
    street: [''],
    building: [''],
    floor: [''],
    flat : ['']
    }
  )

  }

  ngOnInit()
  {
    this.httpUser.getUserByID(this.userId).subscribe((data) => 
    {
      this.user = data.data;
      console.log(this.user.city)

    } 
    )
  }

  submitted()
  {
    console.log(this.userId)
    this.httpUser.updateUser(this.userId,this.user).subscribe(
        ()=> {
          window.location.reload();
        }

      );
  }

}
