import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRightSideComponent } from './payment-right-side.component';

describe('PaymentRightSideComponent', () => {
  let component: PaymentRightSideComponent;
  let fixture: ComponentFixture<PaymentRightSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentRightSideComponent]
    });
    fixture = TestBed.createComponent(PaymentRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
