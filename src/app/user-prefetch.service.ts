import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserPrefetchService implements Resolve<Observable<Array<User>>> {

  constructor(private dataService: DataService) { }

  resolve() {
    return this.dataService.getUsers();
  }
}
