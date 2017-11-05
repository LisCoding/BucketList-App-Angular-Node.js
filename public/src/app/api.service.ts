import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { BucketList } from './bucket-list'
import "rxjs"; // we need this in order to use map

@Injectable()
export class ApiService {
  currentUser = ""
  userLoginID = ""
  constructor(private _http: Http) { }

  //CRUD OPERATIONS

  //create users
    createUser(user: User) {
      return this._http.post("/users", user )
      .map(data => data.json()) // converting to json
      .toPromise() // making a promise that will get something if does not we can pass something a message!
    }

    //create BucketList
    createBucketList(bucketList: BucketList){
      console.log("Are u even here?")
      return this._http.post("/users/" + this.userLoginID, bucketList )
      .map(data => data.json()) // converting to json
      .toPromise() // making a promise that will get something
    }

    //create BucketList for a tag friend
    createBucketListForTaggedPerson(bucketList: BucketList){
      console.log("service tagged person")
      return this._http.post("/friend/" + bucketList.tagName, bucketList )
      .map(data => data.json()) // converting to json
      .toPromise() // making a promise that will get something
    }



  //get all the users
    getusers(){
      return this._http.get("/users")
      .map(data => data.json()) // converting to json
      .toPromise() // making a promise that will get something
    }

    //get all the bucketLists of the user that is login
    getBucketLists(){
      console.log("we are inside API going to make a HTTP request")
      return this._http.get("/bucketLists/" + this.userLoginID)
      .map(data => {
        console.log("this is data return from backend", data)
        return data.json()
      }) // this is the response we got from controllers converting to json
      .toPromise() // making a promise that will get something
    }

    //get all the bucketLists of the user that is login
    getBucketListsUser(userID){
      console.log("we are inside API going to make a HTTP request")
      return this._http.get("/bucketLists/" + userID)
      .map(data => {
        console.log("this is data return from backend", data)
        return data.json()
      }) // this is the response we got from controllers converting to json
      .toPromise() // making a promise that will get something
    }

  //Delete user
    destroy(user: User ){
      return this._http.delete("/users/" + user._id, user)
      .map(data => data.json()) // converting to json
      .toPromise() // making a promise that will get something
    }


  //update user
    update(itemList: BucketList) {
      return this._http.put("/bucketLists/" + itemList._id, itemList)
      .map(data => data.json()) // converting to json
      .toPromise() // making a promise that will get something
    }

  //Show deatils of one user
    show_user(user: User){
      console.log("Iam in service", user)
      return this._http.get("/users/" + user)
      .map(data => data.json()) // converting to json
      .toPromise() // making a promise that will get something
    }


}
