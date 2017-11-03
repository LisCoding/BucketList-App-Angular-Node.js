import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { User } from "./../user";
import { BucketList } from "./../bucket-list";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser = "";

  constructor( private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    this.currentUser = this._apiService.currentUser;
  }

}
