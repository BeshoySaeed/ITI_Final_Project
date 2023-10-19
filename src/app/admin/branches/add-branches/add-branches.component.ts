import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-branches',
  templateUrl: './add-branches.component.html',
  styleUrls: ['./add-branches.component.scss']
})
export class AddBranchesComponent {
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
  onSubmit() {
    console.log(this.Addbranch);
  }
}
