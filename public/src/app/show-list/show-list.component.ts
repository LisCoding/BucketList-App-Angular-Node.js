import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { User } from "./../user";
import { BucketList } from "./../bucket-list";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
userID = ""
bucketLists: Array<BucketList> = []
bucketListDone:  Array<BucketList> = []
bucketListPending:  Array<BucketList> = []

  constructor(private _apiService: ApiService, private _router: Router,  private _route: ActivatedRoute) {

    this._route.paramMap.subscribe( params => {
         console.log(params.get('id'));
         this.userID = params.get('id');
         console.log("this is pollID", this.userID)
    })

   }

  ngOnInit() {
    this.getBucketLists()
    this.completeList()

  }

  getBucketLists(){
    this._apiService.getBucketListsUser(this.userID)
    .then(bucketList => {
      this.bucketLists = bucketList

    console.log("this is we got in the bucketList", bucketList)
    for (var i = 0; i < this.bucketLists.length; i++){
      if(this.bucketLists[i].done){
        this.bucketListDone.push(this.bucketLists[i])
      }else {
        this.bucketListPending.push(this.bucketLists[i])
      }
    }
  }) // redefining the bucketList array ojbects
    .catch(err=> console.log("something went wrong when we were getting teh bucketLists!", err))
  }

  completeList(){
    console.log("are u here:")

  }


}
