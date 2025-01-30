import { Component } from '@angular/core';
import { UserSortService } from '../user-sort.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sort',
  standalone: true,
  imports: [],
  templateUrl: './user-sort.component.html',
  styleUrl: './user-sort.component.css'
})
export class UserSortComponent {

  constructor(private userSortService : UserSortService,
    private router : Router
  ) {}

  sortType = 1;
  
  dummyFunction(value : number) {
    //just for testing!
    return "hello";
  }

  handleClick(type : number) {
    //this.userSortService.receiveSortRequest(type);
    this.sortType = type;
    this.dummyFunction(type);
    this.router.navigate(["/users"], {queryParams : {sortType : type}});
  }

}
