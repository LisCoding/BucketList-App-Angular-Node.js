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
  currentUser = "";

  constructor( private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
  }

  login(){
    this._apiService.currentUser = this.newUser.name
    console.log("Current User name", this._apiService.currentUser)
    this._apiService.createUser(this.newUser)
    .then(status => this.newUser) // response from the back end -redefining the user array ojbects
    .catch(err=> console.log("something went wrong creating the newUser!", err))
    this.newUser = new User()
       
    this._router.navigate(["/dashboard"])
  }

}
