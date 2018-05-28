import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { DataService } from './../../service/data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [DataService]
})
export class BodyComponent {
  constructor(private router: Router, private http: Http, private dataService: DataService) {
    this.showContent();
  }
  private contentName: String;
  private items: String[] = [];
  showContent() {
      if (this.router.url === '/shop') {
        this.contentName = 'Shop';
        this.items = this.dataService.getShopData();
      } else if (this.router.url === '/children') {
        this.contentName = 'For Man';
        this.items = this.dataService.getManData();
      }
  }
}
