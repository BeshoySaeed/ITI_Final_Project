import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllItemsComponent } from './all-items.component';

describe('AllItemsComponent', () => {
  let component: AllItemsComponent;
  let fixture: ComponentFixture<AllItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllItemsComponent]
    });
    fixture = TestBed.createComponent(AllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
