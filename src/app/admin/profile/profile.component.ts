import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService],
})
export class ProfileComponent {
  profileForm!: FormGroup;
  loader = true;
  disable = true;
  user!: any;
  token = {
    token: localStorage.getItem('token'),
  };
  formControllers = [
    'first_name',
    'last_name',
    'email',
    'role_id',
    'phone1',
    'phone2',
  ];
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

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.initializeForm();

    this.getProfile()
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

  initializeForm() {
    this.profileForm = this.fb.group({
      first_name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      last_name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      email: [
        '',
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ),
      ],
      role_id: [''],
      phone1: ['', Validators.pattern(/^\+20-1\d{9}$/)],
      phone2: ['', Validators.pattern(/^\+20-1\d{9}$/)],
    });
  }

  setFormValues() {
    for (let control of this.formControllers) {
      this.profileForm.controls[control].setValue(this.user[control]);
      this.profileForm.controls[control].disable();
    }
    this.profileForm.controls['phone1'].setValue(this.user.phones[0].phone);
    this.profileForm.controls['phone2'].setValue(this.user.phones[1].phone);
  }

  enableEditing() {
    this.disable = !this.disable
    for (let control of this.formControllers) {
      this.profileForm.controls[control].enable();
    }
  }

  cancelEditing() {
    this.disable = !this.disable
    this.setFormValues();
  }

  getProfile(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.authService.profile(this.token).subscribe(
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
      .updateUser(this.user.id, this.profileForm.value)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Profile is updated',
          });
          this.loader = false;
        }
      });
  }
}
