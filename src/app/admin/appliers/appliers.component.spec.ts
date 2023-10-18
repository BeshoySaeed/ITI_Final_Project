import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliersComponent } from './appliers.component';

describe('AppliersComponent', () => {
  let component: AppliersComponent;
  let fixture: ComponentFixture<AppliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppliersComponent]
    });
    fixture = TestBed.createComponent(AppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
