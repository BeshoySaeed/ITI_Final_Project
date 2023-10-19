import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.component.html',
  styleUrls: ['./edit-phone.component.scss']
})
export class EditPhoneComponent {
  isContacted: boolean = false;
  EditPhone!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.EditPhone = this.fb.group(
      {
        phone: ['', Validators.pattern(/^\+20-1\d{9}$/)],

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
    console.log(this.EditPhone);
  }
}
