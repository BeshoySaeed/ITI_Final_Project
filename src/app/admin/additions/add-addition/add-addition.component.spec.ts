import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdditionComponent } from './add-addition.component';

describe('AddAdditionComponent', () => {
  let component: AddAdditionComponent;
  let fixture: ComponentFixture<AddAdditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAdditionComponent]
    });
    fixture = TestBed.createComponent(AddAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
