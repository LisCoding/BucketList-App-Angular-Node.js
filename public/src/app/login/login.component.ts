import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { User } from "./../user";
import { BucketList } from "./../bucket-list";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser = new User();

  constructor( private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    console.log("this is new user", this.newUser)
  }
  login(){
    console.log("login was clicked");
    this._apiService.currentUser = this.newUser.name
    console.log("Current User name", this._apiService.currentUser)
    // this._router.navigate(["/dashboard"])
  }

}
