import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SubscriptionsService } from 'src/app/services/Subscriptions/subscriptions.service';

@Component({
  selector: 'app-add-subscribe',
  templateUrl: './add-subscribe.component.html',
  styleUrls: ['./add-subscribe.component.scss'],
  providers: [MessageService],
})
export class AddSubscribeComponent {
  AddSubscribe!: FormGroup;
  loader = false;
  editorColors = [
    'black',
    'white',
    'red',
    'blue',
    'green',
    '#fd702a',
    'yellow',
  ];
  formControllers = [
    'name',
    'benefit',
    'discount_value',
    'subscribe_value',
    'duration',
    'subscribe_value',
  ];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private subscriptionsService: SubscriptionsService,
    private route: Router
  ) {}

  ngOnInit() {
    this.AddSubscribe = this.fb.group({
      name: [''],
      benefit: [''],
      active: [true],
      discount_value: [
        '',
        [Validators.pattern(/^[0-9]+$/), Validators.required],
      ],
      duration: ['', [Validators.pattern(/^[0-9]+$/), Validators.required]],
      subscribe_value: [
        '',
        [Validators.pattern(/^[0-9]+$/), Validators.required],
      ],
    });
  }

  resetForm() {
    for (let control of this.formControllers) {
      this.AddSubscribe.controls[control].setValue('');
    }
    this.AddSubscribe.controls['active'].setValue(true);
  }

  onSubmit() {
    this.loader = true;
    this.subscriptionsService
      .store(this.AddSubscribe.value)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Subscribe plan is added',
          });
          this.resetForm();
          this.loader = false;
          this.route.navigate(['/admin/subscription-plans']);
        }
      });
  }
}
