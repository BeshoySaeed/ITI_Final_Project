import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Addition } from 'src/app/interface/addition';
import { AdditionsService } from 'src/app/services/additions-service/additions.service';

@Component({
  selector: 'app-add-addition',
  templateUrl: './add-addition.component.html',
  styleUrls: ['./add-addition.component.scss']
})
export class AddAdditionComponent {
  form!: FormGroup;
  // additon= new Addition();
addition={
  id: '',
  name: '',
  img: '',
  price: '',
  description:'',
}
  constructor(private dataServices:AdditionsService , private fb: FormBuilder,private route:Router) { }
  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      image: [null, Validators.required],
    });
  }

  onSubmit() {
      this.dataServices.insertAddition(this.addition).subscribe(res =>{
        
        // console.log(this.add);
      })
      this.route.navigate(['/admin/additions'])
      console.log(this.addition);
    }  

    onSelect(event: any) {
      this.addition.img = event.files[0].name;
      const file = event.files[0];
      this.form.patchValue({
        image: file,
      });
    }

  onRemove() {
    this.form.patchValue({
      image: null
    });
  }
}
