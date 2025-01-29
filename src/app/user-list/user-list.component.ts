import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../../model/User';
import { NgFor } from '@angular/common';
import { UserSortService } from '../user-sort.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, OnDestroy{

  users : User[] = [];

  sortSubscription? : Subscription;
  sortType : number =1;

  constructor(private dataService: DataService, private userSortService : UserSortService) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe( data => {this.users = data;
      this.changeSortOrder();
    }
     );
    this.sortSubscription = this.userSortService.sortEvent
      .subscribe( type => {
        this.sortType = type;
        this.changeSortOrder()})
  }

  changeSortOrder( ) {
      this.users.sort( (a,b) => {
        switch(this.sortType) {
          case 1 : return a.id - b.id;
          case 2 : return a.firstname.localeCompare(b.firstname);
          default : return a.surname.localeCompare(b.surname);
        }
      })
  }

  ngOnDestroy(): void {
      this.sortSubscription?.unsubscribe();
  }

}
