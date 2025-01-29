import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AccessRecord } from '../../model/AccessRecord';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-who-is-in-the-building',
  standalone: true,
  imports: [NgFor],
  templateUrl: './who-is-in-the-building.component.html',
  styleUrl: './who-is-in-the-building.component.css'
})
export class WhoIsInTheBuildingComponent implements OnInit {

  accessRecords : AccessRecord[] = [];

  building = "Adel Square";

  constructor(private dataService : DataService,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
         if(params["building"])
         {
            this.building = params["building"];
         }
          this.loadData();
      });

  }

  loadData() {
    this.dataService
    .getAccessRecordsForTodayForBuilding(this.building).subscribe(data => {
    
      const lastRecordForEachUser = new Map<number, AccessRecord>();
      data.forEach(it => lastRecordForEachUser.set(it.user.id, it));

      this.accessRecords = Array.from(lastRecordForEachUser.values()).filter(it => it.status)
    });
  }
}
