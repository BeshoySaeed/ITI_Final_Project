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
  providers: [MessageService],
})
export class AddUserComponent {
  addUserForm!: FormGroup;
  loader = false;

  formControllers = [
    'first_name',
    'last_name',
    'role_id',
    'email',
    'password',
    'confirmPassword',
     'balance'

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
  constructor(private fb: FormBuilder,private userService: UserService, 
    private messageService: MessageService
    ) {}

  ngOnInit() {
    this.addUserForm = this.fb.group(
      {
        first_name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        last_name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        role_id: ['1'],
        email: [
          '',
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          ),
        ],
        balance:[''],
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


onSubmit() {
  this.loader = true;

  this.userService
    .storeUser(this.addUserForm.value)
    .subscribe((response: any) => {
      if (response.status == 'success') {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'user is added',
        });
        this.resetForm();
        this.loader = false;
      }
    });
}
 
}
