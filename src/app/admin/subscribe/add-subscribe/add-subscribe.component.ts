import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-subscribe',
  templateUrl: './add-subscribe.component.html',
  styleUrls: ['./add-subscribe.component.scss']
})
export class AddSubscribeComponent {
  isContacted: boolean = false;
  AddSubscribe!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.AddSubscribe = this.fb.group(
      {
        name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        benefits: [''],
        location: [''],
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
    console.log(this.AddSubscribe);
  }
}
