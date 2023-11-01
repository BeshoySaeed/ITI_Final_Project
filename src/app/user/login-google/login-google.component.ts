import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { GoogleService ,UserInfo } from 'src/app/services/google/google.service';


@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.scss']
})
export class LoginGoogleComponent {
  userInfo?: UserInfo
  sub :any
  constructor(private http: HttpClient, private router: Router ,private login: AuthService ,private GoogleServive: GoogleService ,private readonly oAuthService: OAuthService){
    GoogleServive.userProfileSubject.subscribe( info => {
      this.userInfo = info
      const value=localStorage.getItem('nonce');
console.log(value)

    })
  }

}
// }
// at_hash
// : 
// "Kxp_qkpCc1MdbMxG51hLbA"
// aud
// : 
// "944769539801-38moaqits1kf0kkqnmk5sje03fd0uhj4.apps.googleusercontent.com"
// azp
// : 
// "944769539801-38moaqits1kf0kkqnmk5sje03fd0uhj4.apps.googleusercontent.com"
// email
// : 
// "sieftade@gmail.com"
// email_verified
// : 
// true
// exp
// : 
// 1698869719
// family_name
// : 
// "trade"
// given_name
// : 
// "sief"
// iat
// : 
// 1698866119
// iss
// : 
// "https://accounts.google.com"
// jti
// : 
// "8471ad157d19ce8ece245f629cddb63a4dfaed7c"
// locale
// : 
// "en"
// name
// : 
// "sief trade"
// nbf
// : 
// 1698865819
// nonce
// : 
// "b0JaM25IYVpjR0VwZU5fQlRUbjFaeFlULnlMSkRSVGYwZXViU1ZyfjY4M0Zi"
// picture
// : 
// "https://lh3.googleusercontent.com/a/ACg8ocJ6Z2Ssin1jVvpyyonbdY0jOiPXWyrlqa6bUSeOh66r=s96-c"
// sub
// : 
// "109736610549705186865"