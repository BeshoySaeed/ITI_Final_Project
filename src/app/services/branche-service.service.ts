import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BrancheServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllBranches(): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}branches`)
  }
  
  getBranchById(id:number ): Observable<object> {
    return this.httpClient.get<object>(`${environment.host}branches/${id}`);
  }

  insertBranches(data: any){
    return this.httpClient.post(`${environment.host}branches/`,data);
  }

  updateBranches(id:any,data: any){
    return this.httpClient.post(`${environment.host}branches/${id}`,data);
  }



  deleteBranchById(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${environment.host}branches/${id}`)
  }
}

