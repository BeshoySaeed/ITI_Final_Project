import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.scss']
})
export class AddPhoneComponent {
  isContacted: boolean = false;
  AddPhone!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.AddPhone = this.fb.group(
      {
        name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        email: [
          '',
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          ),
        ],
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
    console.log(this.AddPhone);
  }
}
