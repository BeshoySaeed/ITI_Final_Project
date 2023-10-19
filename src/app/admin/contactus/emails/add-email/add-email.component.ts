import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.scss']
})
export class AddEmailComponent {
  isContacted: boolean = false;

  Emails = [
    {
      id: 1,
      Email:"Example@gmail.com",
      status:"active",
    },
    {
      id: 2,
      Email:"Example@gmail.com",
      status:"inactive",
    },
    {
      id: 3,
      Email:"Example@gmail.com",
      status:"active",
    },
    {
      id: 4,
      Email:"Example@gmail.com",
      status:"inactive",
    },
    {
      id: 5,
      Email:"Example@gmail.com",
      status:"active",
    },
  
    
  ];
  AddEmail!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.AddEmail = this.fb.group(
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
    console.log(this.AddEmail);
  }
}
