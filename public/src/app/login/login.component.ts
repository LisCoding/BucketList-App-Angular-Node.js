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
  userLoginID = "";
  constructor( private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
  }

  login(){
    //setting the current user to the new user name
    this._apiService.currentUser = this.newUser.name
    //make a APi call to check to create a user
    this._apiService.createUser(this.newUser)
    .then(bananas => { // function () {}

      //setting the userlogindID to the currentUser login in!
      this.userLoginID = bananas._id;
      this._apiService.userLoginID = this.userLoginID
      //redirect to dashboard
      this._router.navigate(["/dashboard"])
    }) // response from the back end -redefining the user array ojbects
    .catch(err=> console.log("something went wrong creating the newUser!", err))
      this.newUser = new User()



  }

}
