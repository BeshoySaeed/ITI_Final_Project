import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-branches',
  templateUrl: './edit-branches.component.html',
  styleUrls: ['./edit-branches.component.scss']
})
export class EditBranchesComponent {
  isContacted: boolean = false;
  Editbranch!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.Editbranch = this.fb.group(
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
    console.log(this.Editbranch);
  }
}