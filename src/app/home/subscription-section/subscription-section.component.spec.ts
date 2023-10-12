import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionSectionComponent } from './subscription-section.component';

describe('SubscriptionSectionComponent', () => {
  let component: SubscriptionSectionComponent;
  let fixture: ComponentFixture<SubscriptionSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionSectionComponent]
    });
    fixture = TestBed.createComponent(SubscriptionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
