import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent {
  editEmployeeForm!: FormGroup;


  employee = {
      id: 1,
      firstName: 'Gerges',
      lastName: "Medhat",
      jobTitle:'chief',
      email: "gergesmedhat@gmail.com",
      mobile: "01288436939",
      national_id:"30004170105739",
      address:"cairo",
      salary: 4000,
      joined_at:"15/08/2023",
      branch_name:"Al Haram",

   
  };


  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.editEmployeeForm = this.fb.group(
      {
        firstName: [this.employee.firstName, Validators.pattern(/^[a-zA-Z]+$/)],
        lastName: [this.employee.lastName, Validators.pattern(/^[a-zA-Z]+$/)],
        jobTitle: [this.employee.jobTitle, Validators.pattern(/^[a-zA-Z]+$/)],
        email: [
          this.employee.email,
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          ),
        ],
        mobile: [this.employee.mobile, Validators.pattern(/^\+20-1\d{9}$/)],
        national_id: [this.employee.national_id, Validators.pattern("^[0-9]{14}$")],  //14 numbers
        salary: [this.employee.salary, Validators.pattern(/^[0-9]+$/)],
        address: [this.employee.address],
        joined_at: [this.employee.joined_at, Validators.pattern(/^(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}$/)],
        branch_name: [this.employee.branch_name],

      },
     
    );
  }

  onSubmit() {
    console.log(this.editEmployeeForm);
  }

}
