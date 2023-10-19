import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-branches',
  templateUrl: './add-branches.component.html',
  styleUrls: ['./add-branches.component.scss']
})
export class AddBranchesComponent {
  isContacted: boolean = false;
  Addbranch!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.Addbranch = this.fb.group(
      {
        name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        address: [''],
        location: [''],
       
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
    console.log(this.Addbranch);
  }
}
