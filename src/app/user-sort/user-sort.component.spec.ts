import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSortComponent } from './user-sort.component';

describe('UserSortComponent', () => {
  let component: UserSortComponent;
  let fixture: ComponentFixture<UserSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when we click on last name the value of sort order is set correctly', ()=>{
      //find the button to click on
      const button : HTMLElement = fixture.debugElement
        .query( x=> x.nativeElement.textContent === "sort by firstname").nativeElement
      button?.click();

      expect(component.sortType).toEqual(2);

  });

  it('dummy function is called when a button is clicked', ()=>{

    const spy = spyOn(component, 'dummyFunction').and.callThrough();
    const button : HTMLElement = fixture.debugElement
        .query( x=> x.nativeElement.textContent === "sort by id").nativeElement
      button?.click();

    fixture.detectChanges();
    
    expect(component.dummyFunction).toHaveBeenCalledWith(1);
    expect(spy.calls.mostRecent().returnValue === "HELLO").toBeTruthy;

  }) 

});
