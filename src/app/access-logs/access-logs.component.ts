import { Component, OnInit } from '@angular/core';
import { AccessRecord } from '../../model/AccessRecord';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-access-logs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './access-logs.component.html',
  styleUrl: './access-logs.component.css'
})
export class AccessLogsComponent implements OnInit {

  accessRecords : AccessRecord[] = [];

  date = "20250129";

  constructor(private dataService : DataService) {}

  ngOnInit(): void {
      this.dataService.getAccessRecords(this.date).subscribe(data => this.accessRecords = data);
  }



}
