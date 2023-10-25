import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SubscriptionsService } from 'src/app/services/Subscriptions/subscriptions.service';

@Component({
  selector: 'app-edit-subscribe',
  templateUrl: './edit-subscribe.component.html',
  styleUrls: ['./edit-subscribe.component.scss'],
  providers: [MessageService],
})
export class EditSubscribeComponent {
  subscribeId = this.activeRoute.snapshot.params['id'];
  loader = true;
  EditSubscribe!: FormGroup;
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
  subscribe: any = {};

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private subscriptionsService: SubscriptionsService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.initializeForm();

    this.getSubscribe()
      .then((response) => {
        this.subscribe = response.data;
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
    this.EditSubscribe = this.fb.group({
      name: [''],
      benefit: [''],
      discount_value: [
        '',
        [Validators.pattern(/^[0-9]+$/), Validators.required],
      ],
      duration: ['', [Validators.pattern(/^[0-9]+$/), Validators.required]],
      subscribe_value: [
        '',
        [Validators.pattern(/^[0-9]+$/), Validators.required],
      ],
      active: [true],
    });
  }

  setFormValues() {
    for (let control of this.formControllers) {
      this.EditSubscribe.controls[control].setValue(this.subscribe[control]);
    }
    this.EditSubscribe.controls['active'].setValue(
      this.subscribe.active == 1 ? true : false
    );
  }

  getSubscribe(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.subscriptionsService.getById(this.subscribeId).subscribe(
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

    this.subscriptionsService
      .update(this.subscribeId, this.EditSubscribe.value)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Subscribe plan is updated',
          });
          this.loader = false;
        }
      });
  }
}
