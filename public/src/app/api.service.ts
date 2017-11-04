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



  //get all the users
    getusers(){
      return this._http.get("/users")
      .map(data => data.json()) // converting to json
      .toPromise() // making a promise that will get something
    }

    //get all the bucketLists of the user that is login
    getBucketLists(){
      return this._http.get("/users/" + this.userLoginID)
      .map(data => data.json()) // converting to json
      .toPromise() // making a promise that will get something
    }

  //Delete user
    destroy(user: User ){
      return this._http.delete("/users/" + user._id, user)
      .map(data => data.json()) // converting to json
      .toPromise() // making a promise that will get something
    }


  //update user
    update(user: User) {
      return this._http.put("/users/" + user._id, user)
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
