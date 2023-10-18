import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-social',
  templateUrl: './edit-social.component.html',
  styleUrls: ['./edit-social.component.scss']
})
export class EditSocialComponent {
  isContacted: boolean = false;
    EditSocial!: FormGroup;
    constructor(private fb: FormBuilder) {}
    ngOnInit() {
      this.EditSocial = this.fb.group(
        {
          name: ['', Validators.pattern(/^[a-zA-Z]+$/)],
          link: [
            '',
            Validators.pattern(
              /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/[^\s]*)?$/
            ),
          ],
        },
      );
    }
    toggleContacted(feedback: any) {
      this.isContacted = feedback;
  
      if (feedback) {
        console.log(feedback.id);
      } else {
        console.log(feedback.id);
      }
    }
    getToggleButtonClass() {
      return this.isContacted ? 'contacted' : 'not-contacted';
    }
    onSubmit() {
      console.log(this.EditSocial);
    }
}
