import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-subscribe',
  templateUrl: './edit-subscribe.component.html',
  styleUrls: ['./edit-subscribe.component.scss']
})
export class EditSubscribeComponent {
  isContacted: boolean = false;
  EditSubscribe!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.EditSubscribe = this.fb.group(
      {
        name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        benefits:['', [Validators.pattern(/^[0-9]+$/), Validators.required]],
        discount_value:['', [Validators.pattern(/^[0-9]+$/), Validators.required]],
        duration:['', [Validators.pattern(/^[0-9]+$/), Validators.required]],
        subscribe_value:['', [Validators.pattern(/^[0-9]+$/), Validators.required]],
       
      },
    );
  }
  toggleContacted(feedback: any) {
    this.isContacted = feedback;

    if (feedback) {
      console.log(feedback.id);
    } else {
      console.log(feedback.id);
    }
  }
  getToggleButtonClass() {
    return this.isContacted ? 'contacted' : 'not-contacted';
  }
  onSubmit() {
    console.log(this.EditSubscribe);
  }

}
