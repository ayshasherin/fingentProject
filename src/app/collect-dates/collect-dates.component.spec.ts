import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectDatesComponent } from './collect-dates.component';

describe('CollectDatesComponent', () => {
  let component: CollectDatesComponent;
  let fixture: ComponentFixture<CollectDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
