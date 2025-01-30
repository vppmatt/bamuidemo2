import { Routes } from '@angular/router';
import { WhoIsInTheBuildingComponent } from './who-is-in-the-building/who-is-in-the-building.component';
import { AccessLogsComponent } from './access-logs/access-logs.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserPrefetchService } from './user-prefetch.service';

export const routes: Routes = [
    {path : "", component: HomePageComponent},
    {path : "emergency", component:WhoIsInTheBuildingComponent},
    {path : "emergency/:building", component:WhoIsInTheBuildingComponent},
    {path: "access", component: AccessLogsComponent},
    {path: "users", resolve : {users : UserPrefetchService} , component: UserPageComponent},
    {path : "**", component : PageNotFoundComponent}
];
