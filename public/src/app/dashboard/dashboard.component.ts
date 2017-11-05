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
  bucketLists: Array<BucketList> = [];
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
  console.log("this coming", bucketList)
  if(bucketList.tagName){
    console.log("we tag a person")
    //we need to create a bucket list for the person tagged
    this.tagFriend(bucketList)
  }

  this._apiService.createBucketList(bucketList)
  .then(status => this.getBucketLists()) // response from the back end -redefining the user array ojbects
  .catch(err=> console.log("something went wrong creating the bucketList!", err))
  this.bucketLists.push(this.newBucketList)

}

getUsers(){
  this._apiService.getusers() // making call to the back end
  .then(users => this.users = users) // redefining the user array ojbects
  .catch(err=> console.log("something went wrong when we were getting teh users!", err))
}
getBucketLists(){
  console.log("we are going to make a API call inside getBucketLists")
  this._apiService.getBucketLists()
  .then(bucketList => {
    this.bucketLists = bucketList,
  console.log("this is we got in the bucketList", bucketList)}) // redefining the bucketList array ojbects
  .catch(err=> console.log("something went wrong when we were getting teh bucketLists!", err))
}

tagFriend(bucketList: BucketList){
  console.log("we making a call for tagged person")
  this._apiService.createBucketListForTaggedPerson(bucketList)
  .then(status => true) // response from the back end -redefining the user array ojbects
  .catch(err=> console.log("something went wrong creating the bucketList for the tagged person!", err))
}

update(itemList){
  console.log("I was clicked for update", itemList)
  itemList.done = true
  this._apiService.update(itemList)
  .then(status => this.getBucketLists()) // response from the back end -redefining the user array ojbects
  .catch(err=> console.log("something went wrong updating the bucketList!", err))
}


}
