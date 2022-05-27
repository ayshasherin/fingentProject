import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInformationDetailsComponent } from './stock-information-details.component';

describe('StockInformationDetailsComponent', () => {
  let component: StockInformationDetailsComponent;
  let fixture: ComponentFixture<StockInformationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockInformationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockInformationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
