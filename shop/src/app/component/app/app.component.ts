import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router, private http: Http) {
  }
  private isRightMenuShow(): boolean {
    return this.router.url === '/basket' || this.router.url === '/login' || this.router.url === '/signin';
  }
}
