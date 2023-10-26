import { Component, OnInit } from '@angular/core';
import { BrancheServiceService } from 'src/app/services/branch/branche-service.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent  {

  branches:any;
  constructor(private dataServices:BrancheServiceService) { }
  ngOnInit(){
    this.getBranchData();
  }

  getBranchData(){
    this.dataServices.getAllBranches().subscribe(res =>{
    this.branches=res;
    // console.log(this.branches);
   })
  }
}
