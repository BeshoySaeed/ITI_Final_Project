import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BrancheServiceService } from 'src/app/services/branch/branche-service.service';
import { Branch } from 'src/app/interface/branches';
@Component({
  selector: 'app-edit-branches',
  templateUrl: './edit-branches.component.html',
  styleUrls: ['./edit-branches.component.scss'],
})
export class EditBranchesComponent {
  Editbranch!: FormGroup;
  // branch=new Branch();
  branchId: any;
  loading: boolean = false;
  branches: any;
  constructor(
    private fb: FormBuilder,
    private ActivatedRoute: ActivatedRoute,
    private dataServices: BrancheServiceService,
    private route: Router
  ) {}
  ngOnInit() {
    this.Editbranch = this.fb.group({
      name: ['', Validators.pattern(/^[a-zA-Z ]+$/)],
      address: [''],
      address_location: [''],
    });
    this.ActivatedRoute.paramMap.subscribe((paramMap) => {
      this.branchId = Number(paramMap.get('id'));
      console.log(this.branchId);
      this.dataServices.getBranchById(this.branchId).subscribe((object) => {
        this.branches = object.data;
        console.log(this.branches);
      });
    });
  }

  onSubmit() {
    this.dataServices
      .updateBranches(this.branchId, this.Editbranch.value)
      .subscribe((data) => {});
    this.route.navigate(['/admin/branches/']);
  }

  // getBranchData() {
  //   this.dataServices.getBranchById(this.id).subscribe(res => {
  //     // console.log(res);
  //     this.data = res;
  //     this.branch=this.data;
  //     console.log(this.branch);
  //   })
  // }

  // updateteBranch() {
  //   this.dataServices.getBranchById(this.id).subscribe(res => {
  //     this.branches=res;
  //     this.branch=this.branches;
  //     // console.log(this.branch);
  //   })
  // }
}
