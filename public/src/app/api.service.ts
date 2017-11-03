import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { BucketList } from './bucket-list'

@Injectable()
export class ApiService {
  currentUser = ""
  constructor(private _http: Http) { }

}
