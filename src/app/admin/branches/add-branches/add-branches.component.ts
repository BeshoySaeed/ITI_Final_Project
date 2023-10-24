import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BrancheServiceService } from 'src/app/services/branche-service.service';
import { Branch } from 'src/app/interface/branches';
@Component({
  selector: 'app-add-branches',
  templateUrl: './add-branches.component.html',
  styleUrls: ['./add-branches.component.scss']
})
export class AddBranchesComponent {
  Addbranch!: FormGroup;
      
  branch = new Branch();
  branches:any;

  constructor(private dataServices:BrancheServiceService , private fb: FormBuilder) { }

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
    
    console.log(res);
  })
}

}



