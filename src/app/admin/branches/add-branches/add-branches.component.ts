import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Branch } from 'src/app/interface/branches';
import { BrancheServiceService } from 'src/app/services/branch/branche-service.service';
@Component({
  selector: 'app-add-branches',
  templateUrl: './add-branches.component.html',
  styleUrls: ['./add-branches.component.scss']
})
export class AddBranchesComponent {
  Addbranch!: FormGroup;
      
  branch = new Branch();
  branches:any;

  constructor(private dataServices:BrancheServiceService ,
             private fb: FormBuilder,
             private route:Router
             ) { }

  ngOnInit(){

    this.Addbranch = this.fb.group(
    {
      name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
      address: [''],
      location: [''],     
    },
  );

}

insertBranchData(){
  this.dataServices.insertBranches(this.branch).subscribe(res =>{
   this.route.navigate(['/admin/branches/'])
   
    console.log(res);
  })
}

}



