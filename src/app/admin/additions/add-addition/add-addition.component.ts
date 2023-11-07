import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Addition } from 'src/app/interface/addition';
import { AdditionsService } from 'src/app/services/additions-service/additions.service';

@Component({
  selector: 'app-add-addition',
  templateUrl: './add-addition.component.html',
  styleUrls: ['./add-addition.component.scss']
})
export class AddAdditionComponent implements OnInit{
  addCategoryForm!: FormGroup;
  formData!: FormData;




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
    this.addCategoryForm = this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      image: [null, Validators.required],
    });
  }

  onSubmit() {

    // const formData = new FormData();
    // formData.append('image', this.addCategoryForm.get('name')?.value);
    this.formData.append('name', this.addCategoryForm.get('name')?.value)
    this.formData.append('price', this.addCategoryForm.get('price')?.value)
    this.formData.append('description', this.addCategoryForm.get('description')?.value)

      this.dataServices.insertAddition(this.formData).subscribe(res =>{
        
        console.log(res);
      })
      this.route.navigate(['/admin/additions'])
      // console.log(this.addition);
    }  




    onSelect(event:any) {
      this.formData = new FormData()
      let file = event.files[0];
      this.formData.append('img', file);
      this.addition.img = file.name;
      this.addCategoryForm.patchValue({
        image: file
      });
    }
  
    onRemove() {
      this.addCategoryForm.patchValue({
        image: null
      });
    }
  }