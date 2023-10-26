import { Component , OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors ,ReactiveFormsModule } from '@angular/forms';  
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ApplicantsService } from 'src/app/services/applicant/applicants.service';

@Component({
  selector: 'app-job-app',
  templateUrl: './job-app.component.html',
  styleUrls: ['./job-app.component.scss']
})
export class JobAppComponent implements OnInit{
  jobForm!: FormGroup;
  applicants:any;  
  applicant = {
    title:'',
    first_name:'',
    last_name:'',
    email: '',
    mobile: '',
    education:'',
    cv: ''
  };
  constructor(private fb: FormBuilder,private dataServices:ApplicantsService ) { }

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      education: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
        ],
      ],
      mobile: ['', [Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]],
      title: ['', [Validators.required]],
      cv: ['',Validators.required]

    });
  }
  
  get title(){
    return this.jobForm.get('title');
  }
  get first_name(){
    return this.jobForm.get('firsr_name');
  }
  get last_name(){
    return this.jobForm.get('last_name');
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

  onSubmit() {

    this.dataServices.insertApplicant(this.applicant).subscribe((res: any) => {
    console.log(res);
    })
  }
}


