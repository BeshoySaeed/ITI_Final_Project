import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInstructionsComponent } from './order-instructions.component';

describe('OrderInstructionsComponent', () => {
  let component: OrderInstructionsComponent;
  let fixture: ComponentFixture<OrderInstructionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderInstructionsComponent]
    });
    fixture = TestBed.createComponent(OrderInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
