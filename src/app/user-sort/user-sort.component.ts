import { Component } from '@angular/core';
import { UserSortService } from '../user-sort.service';

@Component({
  selector: 'app-user-sort',
  standalone: true,
  imports: [],
  templateUrl: './user-sort.component.html',
  styleUrl: './user-sort.component.css'
})
export class UserSortComponent {

  constructor(private userSortService : UserSortService) {}
  
  handleClick(type : number) {
    this.userSortService.receiveSortRequest(type);
  }

}
