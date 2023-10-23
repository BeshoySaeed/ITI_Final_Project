import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CustomerServicePhonesService } from 'src/app/services/Customer service data/phones/customer-service-phones.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.scss'],
  providers: [MessageService],
})
export class AddPhoneComponent {
  AddPhone!: FormGroup;
  loader = false;

  constructor(
    private fb: FormBuilder,
    private phonesService: CustomerServicePhonesService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.AddPhone = this.fb.group({
      phone: ['', Validators.pattern(/^\+20-1\d{9}$/)],
      active: [''],
    });
  }

  onSubmit() {
    this.loader = true;
    this.phonesService
      .storePhone(this.AddPhone.value)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Phone is added',
          });
          this.loader = false;
        }
      });
  }
}
