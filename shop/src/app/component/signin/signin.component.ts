
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    constructor(public router: Router, public http: Http) {
    }

    signin(event, username, password, confirmPassword, phonNumber) {
        event.preventDefault();
        // let body = JSON.stringify({ username, password });
        // this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
        //   .subscribe(
        //     response => {
        //       localStorage.setItem('id_token', response.json().id_token);
        //       this.router.navigate(['home']);
        //     },
        //     error => {
        //       alert(error.text());
        //       console.log(error.text());
        //     }
        //   );
    }
}
