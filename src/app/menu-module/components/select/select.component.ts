import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() title:string="";
  @Input() data:any []=[]
  @Output() selectedvalue =new EventEmitter();
  
  detectCategory(event:any){
   this.selectedvalue.emit(event);
  }
  

  
 }
 