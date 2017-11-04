import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from './../../api.service';
import { User } from "./../../user";
import { BucketList } from "./../../bucket-list";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Input() users;
  @Output() createNewBucketListEvent = new EventEmitter()

  newBucketList = new BucketList();
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  }

  createNewBucketList(){
    console.log("I was clicked!!!")
    this.createNewBucketListEvent.emit(this.newBucketList);
    this.newBucketList = new BucketList();
  }

}
