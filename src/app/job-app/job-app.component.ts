import { Component , OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors ,ReactiveFormsModule } from '@angular/forms';  

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-job-app',
  templateUrl: './job-app.component.html',
  styleUrls: ['./job-app.component.scss']
})
export class JobAppComponent implements OnInit{
  jobForm!: FormGroup;
 
  
  constructor(private fb: FormBuilder) {  
   
  }

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      name: ['', [Validators.required]],
      l_name: ['', [Validators.required]],
      education: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
        ],
      ],
      mobile: ['', [Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]],
      job: ['', [Validators.required]],
      cv: ['',Validators.required]

    });
  }
  

  submitJobForm() {
    console.log(this.jobForm);
  }

  get job(){
    return this.jobForm.get('job');
  }
  get name(){
    return this.jobForm.get('name');
  }
  get l_name(){
    return this.jobForm.get('l_name');
  }
  get email(){
    return this.jobForm.get('email');
  }
  get mobile(){
    return this.jobForm.get('mobile');
  }
  get education(){
    return this.jobForm.get('education');
  }
  get cv(){
    return this.jobForm.get('cv');
  }


  
}


