import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BrancheServiceService } from 'src/app/services/branche-service.service';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';
import { Branch } from 'src/app/interface/branches';
@Component({
  selector: 'app-edit-branches',
  templateUrl: './edit-branches.component.html',
  styleUrls: ['./edit-branches.component.scss']
})
export class EditBranchesComponent {
  Editbranch!: FormGroup;
  id:any;
  // branch=new Branch();
  branch = {
    name : '',
    address: '',
    address_location:'',
  };

  loading: boolean = false;
  data: any;
  constructor(private fb: FormBuilder,private route :ActivatedRoute,private dataServices: BrancheServiceService) { }
  ngOnInit() {

    this.Editbranch = this.fb.group(
      {
        name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
        address: [''],
        location: [''],
      },
    );
  //  this.route.params.subscribe((value)=>{
    // this.id=value['id'];
  // })
  // console.log(this.route.snapshot.params['id']);
this.id=this.route.snapshot.params['id'];
  this.getBranchData();
  // this.updateteBranch();
  // console.log(this.branches);
  // console.log(this.branch);

}


getBranchData() {
  this.dataServices.getBranchById(this.id).subscribe(res => {
    // console.log(res);
    this.data = res;
    this.branch=this.data;
    console.log(this.branch);
  })
}

  // updateteBranch() {
  //   this.dataServices.getBranchById(this.id).subscribe(res => {
  //     this.branches=res;
  //     this.branch=this.branches;
  //     // console.log(this.branch);
  //   })
  // }
}