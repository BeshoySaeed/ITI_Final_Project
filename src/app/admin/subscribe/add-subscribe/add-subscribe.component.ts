import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-subscribe',
  templateUrl: './add-subscribe.component.html',
  styleUrls: ['./add-subscribe.component.scss']
})
export class AddSubscribeComponent {
  AddSubscribe!: FormGroup;
  editorColors = ["black", "white", "red", "blue", "green", "#fd702a", "yellow"]
  
  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.AddSubscribe = this.fb.group(
      {
        name: [''],
        benefit: [''],
        active: [true],
        discount_value:['', [Validators.pattern(/^[0-9]+$/), Validators.required]],
        duration:['', [Validators.pattern(/^[0-9]+$/), Validators.required]],
        subscribe_value:['', [Validators.pattern(/^[0-9]+$/), Validators.required]],
      },
    );
  }

  safeHTML(){
    return this.sanitizer.bypassSecurityTrustHtml(this.AddSubscribe.controls['text'].value);
  }

  onSubmit() {
    console.log(this.AddSubscribe);
  }
}
