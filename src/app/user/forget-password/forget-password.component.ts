import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

  email:string="";
  formGroup : FormGroup;
  errors = null;
  successMsg : any;
  constructor(    public authService: AuthService, private router: Router
    ){
    this.formGroup = new FormGroup({
      email : new FormControl('',[Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
    })
  }
  onSubmit(){
    this.authService.sendResetPasswordLink(this.formGroup.value).subscribe(
      (result) => {
        this.successMsg = result;
        if (this.successMsg.success) {
          this.router.navigate(['/newpass']); // Redirect to the dashboard page
          setTimeout(() => {
            location.reload();
          }, 2000);
        } else {

          console.log("Password reset email failed to send.");
        }

      },(error) => {
        this.errors = error.error.message;
      })
  }
}
