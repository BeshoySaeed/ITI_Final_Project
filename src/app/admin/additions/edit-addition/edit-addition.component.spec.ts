import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdditionComponent } from './edit-addition.component';

describe('EditAdditionComponent', () => {
  let component: EditAdditionComponent;
  let fixture: ComponentFixture<EditAdditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdditionComponent]
    });
    fixture = TestBed.createComponent(EditAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
