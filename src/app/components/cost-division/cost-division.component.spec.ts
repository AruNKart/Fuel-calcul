import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostDivisionComponent } from './cost-division.component';

describe('CostDivisionComponent', () => {
  let component: CostDivisionComponent;
  let fixture: ComponentFixture<CostDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostDivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
