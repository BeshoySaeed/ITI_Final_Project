import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentLeftSideComponent } from './payment-left-side.component';

describe('PaymentLeftSideComponent', () => {
  let component: PaymentLeftSideComponent;
  let fixture: ComponentFixture<PaymentLeftSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentLeftSideComponent]
    });
    fixture = TestBed.createComponent(PaymentLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
