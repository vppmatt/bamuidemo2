import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserSortComponent } from './user-sort/user-sort.component';

import { AccessLogsComponent } from './access-logs/access-logs.component';
import { WhoIsInTheBuildingComponent } from './who-is-in-the-building/who-is-in-the-building.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, UserSortComponent, AccessLogsComponent,
     WhoIsInTheBuildingComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



}
