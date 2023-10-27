import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkpass } from 'src/app/user/register/confirmpass';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user-service/user.service';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  addUserForm!: FormGroup;
  loader = false;

  formControllers = [
    'firstName',
    'lastName',
    'role',
    'email',
    'password',
    'confirmPassword',
    'phone1',
    'phone2',

  ];
  roles= [
    {
      id: 1,
      name: "User"
    },
    {
      id: 2,
      name: "Admin"
    },
  ];
  constructor(
    private fb: FormBuilder,
    private userServies: UserService,
   
  ) {}
  /*
  roles= [
    {
      id: 1,
      name: "User"
    },
    {
      id: 2,
      name: "Admin"
    },
  ];

  constructor(private fb: FormBuilder) {}
   */
  ngOnInit() {
    this.addUserForm = this.fb.group(
      {
        firstName: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        lastName: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        role: ['1'],
        email: [
          '',
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          ),
        ],
        phone1: ['', Validators.pattern(/^\+20-1\d{9}$/)],
        phone2: ['', Validators.pattern(/^\+20-1\d{9}$/)],
        password: [
          '',
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
        ],
        confirmPassword: [''],
      },
      { validator: checkpass('password', 'confirmPassword') }
    );
  }

  resetForm() {
    for (let control of this.formControllers) {
      this.addUserForm.controls[control].setValue('');
    }

  }

  /*
  onSubmit() {
    console.log(this.addUserForm);
  }
*/
onSubmit() {
  this.loader = true;

  this.userServies
    .storeUser(this.addUserForm.value)
    .subscribe((response: any) => {
      if (response.status == 'success') {
    
        this.resetForm();
        this.loader = false;
      }
    });
}
 
}
