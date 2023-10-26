import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EmployeesService } from 'src/app/services/Employees/employees.service';
import { BrancheServiceService } from 'src/app/services/branche-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
  providers: [MessageService],
})
export class EditEmployeeComponent {
  editEmployeeForm!: FormGroup;
  employeeId = this.activeRoute.snapshot.params['id'];
  loader = true;
  employee: any = {};
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
    'branch_id'
  ];

  branches = [];

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private employeeService: EmployeesService,
    private branchesService: BrancheServiceService,
    private messageService: MessageService
  ) {}
  
  ngOnInit() {
    this.initializeForm();
    this.getAllBranches();

    this.getEmployee()
      .then((response) => {
        this.employee = response.data;
      })
      .then(() => {
        this.setFormValues();
        this.loader = false;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  initializeForm () {
    this.editEmployeeForm = this.fb.group({
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
  }

  setFormValues() {
    for (let control of this.formControllers) {
      this.editEmployeeForm.controls[control].setValue(this.employee[control]);
    }
  }

  getEmployee(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.employeeService.getById(this.employeeId).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
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

    this.employeeService
      .update(this.employeeId, this.editEmployeeForm.value)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Employee is updated',
          });
          this.loader = false;
        }
      });
  }
}
