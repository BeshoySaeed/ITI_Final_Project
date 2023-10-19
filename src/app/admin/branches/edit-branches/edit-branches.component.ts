import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-branches',
  templateUrl: './edit-branches.component.html',
  styleUrls: ['./edit-branches.component.scss']
})
export class EditBranchesComponent {
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
  onSubmit() {
    console.log(this.Editbranch);
  }
}