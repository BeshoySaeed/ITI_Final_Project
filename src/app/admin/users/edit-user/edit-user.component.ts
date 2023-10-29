import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user-service/user.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  providers: [MessageService],
})
export class EditUserComponent {
  editUserForm!: FormGroup;
  userId = this.activeRoute.snapshot.params['id'];
  loader = true;
  user: any = {};
  

  roles = [
    {
      id: 1,
      name: 'User',
    },
    {
      id: 2,
      name: 'Admin',
    },
  ];
  formControllers = [
    'first_name',
    'last_name',
    'email',
    'role_id',
    'phone1',
    'phone2'

  ];

  

  constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute,private userService: UserService, 
    private messageService: MessageService
    ) {}


  ngOnInit() {
    this.initializeForm();
    
    this.getUser()
    .then((response) => {
      this.user = response.data;
    })
    .then(() => {
      this.setFormValues();
      this.loader = false;
    })
    .catch((error) => {
      console.error(error);
    });
 
  }

  initializeForm () {
    this.editUserForm = this.fb.group({
      first_name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      last_name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      email: [
        '',
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ),
      ],
      role_id:[''],
      phone1: ['', Validators.pattern(/^\+20-1\d{9}$/)],
      phone2: ['', Validators.pattern(/^\+20-1\d{9}$/)],


    });
  }

  setFormValues() {
    for (let control of this.formControllers) {
      this.editUserForm.controls[control].setValue(this.user[control]);
    }
  }


  getUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.getUserByID(this.userId).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


  onSubmit() {
    this.loader = true;

    this.userService
      .updateUser(this.userId, this.editUserForm.value)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'user is updated',
          });
          this.loader = false;
        }
      });
  }
  
}
