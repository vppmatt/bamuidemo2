import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AccessRecord } from '../../model/AccessRecord';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from '../../model/Building';

@Component({
  selector: 'app-who-is-in-the-building',
  standalone: true,
  imports: [NgFor],
  templateUrl: './who-is-in-the-building.component.html',
  styleUrl: './who-is-in-the-building.component.css'
})
export class WhoIsInTheBuildingComponent implements OnInit {

  accessRecords : AccessRecord[] = [];

  buildings : Building[] = [];

  building = "";

  displayMessage : string = "";
  displayClass : string = "";

  constructor(private dataService : DataService,
    private route : ActivatedRoute,
    private router : Router
  ) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
         if(params["building"])
         {
            this.building = params["building"];
         }
          this.loadData();
      });

      this.dataService.getBuildings().subscribe( data => this.buildings = data);

  }

  handleChangeBuilding(event : Event) {
    this.building = (event.target as HTMLSelectElement).value;
    this.router.navigate(["/emergency",this.building])
  }

  loadData() {
    this.displayMessage = "loading... please wait"
    this.displayClass = "alert alert-info"
    this.accessRecords  = [];

    this.dataService.getAccessRecordsForTodayForBuilding(this.building)
        .subscribe({
          next : data => {
            this.displayClass = "";
            this.displayMessage = "";
            const lastRecordForEachUser = new Map<number, AccessRecord>();
            data.forEach(it => lastRecordForEachUser.set(it.user.id, it));
            this.accessRecords = Array.from(lastRecordForEachUser.values()).filter(it => it.status)
          },
          error : error => {
            console.log("error", error)
                this.displayMessage = "something went wrong"
                this.displayClass = "alert alert-danger"
          },
          complete: () => {}

        });


  }
}
