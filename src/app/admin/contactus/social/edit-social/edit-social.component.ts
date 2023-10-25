import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SocialMediaAccount } from 'src/app/interface/social-media-account';
import { SocialMediaAccountsService } from 'src/app/services/Social media accounts/social-media-accounts.service';

@Component({
  selector: 'app-edit-social',
  templateUrl: './edit-social.component.html',
  styleUrls: ['./edit-social.component.scss'],
  providers: [MessageService],
})
export class EditSocialComponent {
  EditSocial!: FormGroup;
  socialId = this.activeRoute.snapshot.params['id'];
  socialAccount!: SocialMediaAccount;
  loader = true;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private socialService: SocialMediaAccountsService,
    private messageService: MessageService
  ) {}
  
  ngOnInit() {
    this.initializeForm();

    this.getSocialAccount()
      .then((response) => {
        this.socialAccount = response.data;
      })
      .then(() => {
        this.EditSocial.controls['link'].setValue(this.socialAccount.link);
        this.loader = false;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  initializeForm() {
    this.EditSocial = this.fb.group({
      link: [
        '',
        Validators.pattern(
          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/[^\s]*)?$/
        ),
      ],
    });
  }

  getSocialAccount(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.socialService.getById(this.socialId).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  
  onSubmit() {
    this.loader = true;

    this.socialService
      .update(this.socialId, this.EditSocial.value)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Social Account is updated',
          });
          this.loader = false;
        }
      });
  }
}
