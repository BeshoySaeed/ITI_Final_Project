import { Component , OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors ,ReactiveFormsModule } from '@angular/forms';  
import { Applicant } from 'src/app/interface/applicants';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ApplicantsService } from 'src/app/services/applicants.service';

@Component({
  selector: 'app-job-app',
  templateUrl: './job-app.component.html',
  styleUrls: ['./job-app.component.scss']
})
export class JobAppComponent implements OnInit{
  jobForm!: FormGroup;
//  applicant=new Applicant();

applicant={
  title: '',
  first_name:'',
  last_name:'',
  email: '',
  mobile: '',
  education:'',
  cv: ''
};
 applicants:any;  

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


  




getBranchData(){
this.dataServices.getAllBranches().subscribe(res =>{
  this.applicants=res;
  console.log(this.applicants);
})
}
insertBranchData(){
this.dataServices.insertBranches({
  title:'ssss',  
  first_name :'saad',
    last_name:'hossam',
    email:'saad@gmail.com',
    mobile:'01111111111',
    education:'saad',
    cv:'ddddddddd'
  }).subscribe(res =>{
  
  console.log(res);
})
}


// insertBranch(): void {
//   this.dataServices.insertBranch(this.branchData).subscribe((response) => {
//     // handle the response if needed
//     console.log(response);
//   });
// }

}





