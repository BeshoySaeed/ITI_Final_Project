import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EmployeesService } from 'src/app/services/Employees/employees.service';
import { BrancheServiceService } from 'src/app/services/branche-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
  providers: [MessageService],
})
export class AddEmployeeComponent {
  loader = false;
  addEmployeeForm!: FormGroup;
  formControllers = [
    'first_name',
    'last_name',
    'job_title',
    'phone',
    'email',
    'national_id',
    'salary',
    'street',
    'area',
    'city',
    'joined_at',
  ];

  branches = [];

  constructor(
    private fb: FormBuilder,
    private employeesService: EmployeesService,
    private messageService: MessageService,
    private branchesService: BrancheServiceService,
  ) {}

  ngOnInit() {
    this.addEmployeeForm = this.fb.group({
      first_name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      last_name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      job_title: [''],
      email: [
        '',
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ),
      ],
      phone: ['', Validators.pattern(/^\+20-1\d{9}$/)],
      national_id: ['', Validators.pattern('^[0-9]{14}$')], //14 numbers
      salary: [''],
      street: [''],
      area: [''],
      city: [''],
      joined_at: ['', Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
      branch_id: [1],
    });
    
    this.getAllBranches();
  }

  resetForm() {
    for (let control of this.formControllers) {
      this.addEmployeeForm.controls[control].setValue('');
    }
    this.addEmployeeForm.controls['branch_id'].setValue(1);
  }

  getAllBranches() {
    this.branchesService
      .getAllBranches()
      .subscribe((branches: any) => {
        this.branches = branches.data;
      });
  }

  onSubmit() {
    this.loader = true;

    this.employeesService
      .store(this.addEmployeeForm.value)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Employee is added',
          });
          this.resetForm();
          this.loader = false;
        }
      });
  }
}
