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
  userLoginID = "";
  newBucketList = new BucketList()
  bucketList: Array<BucketList> = [];
  users: Array<User> = [];

  constructor( private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    this.currentUser = this._apiService.currentUser;
    this.userLoginID = this._apiService.userLoginID;
    this.getUsers()
    this.getBucketLists()

  }

  //create a new bucketList and save in the dataBase
createNewBucketListChild(bucketList: BucketList){
  bucketList.author = this._apiService.currentUser
  this._apiService.createBucketList(bucketList)
  .then(status => this.newBucketList) // response from the back end -redefining the user array ojbects
  .catch(err=> console.log("something went wrong creating the bucketList!", err))
  this.bucketList.push(bucketList);
    console.log("$$$$$$$$$$",this.bucketList)

}

getUsers(){
  this._apiService.getusers() // making call to the back end
  .then(users => this.users = users) // redefining the user array ojbects
  .catch(err=> console.log("something went wrong when we were getting teh users!", err))
}
getBucketLists(){
  

}

}
