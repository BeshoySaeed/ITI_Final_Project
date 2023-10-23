import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CustomerServiceEmailsService } from 'src/app/services/Customer service data/emails/customer-service-emails.service';

@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.scss'],
  providers: [MessageService],
})
export class AddEmailComponent {
  AddEmail!: FormGroup;
  loader = false;

  constructor(
    private fb: FormBuilder,
    private emailsService: CustomerServiceEmailsService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.AddEmail = this.fb.group({
      email: [
        '',
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ),
      ],
      active: [true],
    });
  }

  resetForm() {
    this.AddEmail.controls['email'].setValue('');
    this.AddEmail.controls['active'].setValue(true);
  }

  onSubmit() {
    this.loader = true;

    this.emailsService
      .storeEmail(this.AddEmail.value)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Email is added',
          });
          this.resetForm();
          this.loader = false;
        }
      });
  }
}
