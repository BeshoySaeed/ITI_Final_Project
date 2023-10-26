import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CustomerServiceEmail } from 'src/app/interface/customer-service-email';
import { CustomerServiceEmailsService } from 'src/app/services/Customer service data/emails/customer-service-emails.service';

@Component({
  selector: 'app-edit-email',
  templateUrl: './edit-email.component.html',
  styleUrls: ['./edit-email.component.scss'],
  providers: [MessageService],
})
export class EditEmailComponent {
  emailId = this.activeRoute.snapshot.params['id'];
  email!:CustomerServiceEmail;
  EditEmail!: FormGroup;
  loader = true;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private phonesService: CustomerServiceEmailsService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.initializeForm();

    this.getEmailById()
      .then((response) => {
        this.email = response.data;
      })
      .then(() => {
        this.EditEmail.controls['email'].setValue(this.email.email);
        this.EditEmail.controls['active'].setValue(
          this.email.active == 1 ? true : false
        );
        this.loader = false;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  initializeForm() {
    this.EditEmail = this.fb.group({
      email: [
        '',
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ),
      ],
      active: [''],
    });
  }

  getEmailById(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.phonesService.getById(this.emailId).subscribe(
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
    this.phonesService
      .update(this.emailId, this.EditEmail.value)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Email is updated',
          });
          this.loader = false;
        }
      });
  }
}
