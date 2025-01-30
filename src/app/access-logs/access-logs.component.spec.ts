import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLogsComponent } from './access-logs.component';
import { provideHttpClient } from '@angular/common/http';
import { AccessRecord } from '../../model/AccessRecord';
import { Observable, of } from 'rxjs';
import { DataService } from '../data.service';

describe('AccessLogsComponent', () => {
  let component: AccessLogsComponent;
  let fixture: ComponentFixture<AccessLogsComponent>;

  const dummyData : Array<AccessRecord> = [
    {id: 101, 
      user : {id: 1, firstname: "Matt", surname : "Thornfield"},
      time : "1234",
      building : "test",
      status: true},
    {id: 102, 
        user : {id: 1, firstname: "Matt", surname : "Thornfield"},
        time : "1234",
        building : "test",
        status: false},
  ];

  beforeEach(async () => {

    const fakeGetAccessRecords = () : Observable<Array<AccessRecord>> => {
       return of(dummyData);
    };

    const mockDataService = jasmine.createSpyObj('DataService', ['getAccessRecords']);
    mockDataService.getAccessRecords.and.returnValue(of(dummyData));   //.callFake(fakeGetAccessRecords);

    const mockDataServiceProvider = { provide: DataService, useValue : mockDataService};

    await TestBed.configureTestingModule({
      imports: [AccessLogsComponent],
      providers: [provideHttpClient(), mockDataServiceProvider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loaded data is stored in accessRecordsArray ', () => {
    expect(component.accessRecords).toEqual(dummyData);
  })
});
