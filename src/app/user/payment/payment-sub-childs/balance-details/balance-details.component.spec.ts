import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceDetailsComponent } from './balance-details.component';

describe('BalanceDetailsComponent', () => {
  let component: BalanceDetailsComponent;
  let fixture: ComponentFixture<BalanceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceDetailsComponent]
    });
    fixture = TestBed.createComponent(BalanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
