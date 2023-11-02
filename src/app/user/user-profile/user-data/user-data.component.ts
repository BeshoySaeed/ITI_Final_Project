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
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@*%$#])[a-zA-Z\\d@*%$#]+$')
    ]],
    confirmpassword: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@*%$#])[a-zA-Z\\d@*%$#]+$'),
    ]],}
   ,{validator: checkpass('password', 'confirmpassword')}
  )

  }

  ngOnInit()
  {
    this.httpUser.getUserByID(this.userId).subscribe((data) => 
    {
      this.user = data.data;
      console.log(this.user)
    } 
    )
  }

  submitted()
  {
    this.httpUser.updateUser(this.userId,
      {
        first_name : this.user.first_name,
        last_name : this.user.last_name,
        email : this.user.email
      }
      ).subscribe(
        ()=> {
          window.location.reload();
          console.log(this.user.last_name)
        }

      );
  }

}
