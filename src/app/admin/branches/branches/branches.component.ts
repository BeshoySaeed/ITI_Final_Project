import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';
import { BrancheServiceService } from 'src/app/services/branche-service.service';
import { Branch } from 'src/app/interface/branches';
@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  id:any;

  branch = new Branch();

  loading: boolean = false;
  data: any;
  constructor(private route :ActivatedRoute,private dataServices: BrancheServiceService) { }
  ngOnInit():void {
    this.id = this.route.snapshot.params["id"] ;
    this.getBranchData();
    // this.retrieveBranch();
  }

  getBranchData() {
    this.dataServices.getAllBranches().subscribe(res => {
      this.data = res;
      console.log(this.data);
    })
  }
  insertBranchData() {
    this.dataServices.insertBranches(this.data).subscribe(res => {

      // console.log(res);
    })
  }

  deleteBranch(id: any) {
    this.dataServices.deleteBranchById(id).subscribe(res => {
      this.getBranchData();
    })
  }

  getBranch() {
    this.dataServices.getBranchById(this.id).subscribe(res => {
      this.data=res;
      this.branch=this.data;
    })
  }


  clear(table: Table) {
    table.clear();
  }

  applyFilterGlobal($event: any, dt: any, stringVal: string) {
    dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
