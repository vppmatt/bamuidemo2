import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsInTheBuildingComponent } from './who-is-in-the-building.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('WhoIsInTheBuildingComponent', () => {
  let component: WhoIsInTheBuildingComponent;
  let fixture: ComponentFixture<WhoIsInTheBuildingComponent>;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoIsInTheBuildingComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();
    sessionStorage.removeItem("buildings-last-fetch");
    fixture = TestBed.createComponent(WhoIsInTheBuildingComponent);
    httpController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('buildings are loaded on component load ' , () => {

    httpController.expectOne("https://liveserver.idontexist.com/api/building")
    
    .flush([{id:1, name: "test"}, {id: 2, name : "matt"}]);

    expect(component.buildings.length).toEqual(2);
  })
});
