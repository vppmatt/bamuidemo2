import {  Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSortService {

  constructor() { }

  private _sortEvent = new Subject<number>();

  get sortEvent() : Observable<number> {
      return this._sortEvent.asObservable();
  }

  receiveSortRequest(type : number) {
    this._sortEvent.next(type);
  }

}
