import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentUserBalanceComponent } from './payment-user-balance.component';

describe('PaymentUserBalanceComponent', () => {
  let component: PaymentUserBalanceComponent;
  let fixture: ComponentFixture<PaymentUserBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentUserBalanceComponent]
    });
    fixture = TestBed.createComponent(PaymentUserBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
