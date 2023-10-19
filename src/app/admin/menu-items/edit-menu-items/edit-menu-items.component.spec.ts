import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuItemsComponent } from './edit-menu-items.component';

describe('EditMenuItemsComponent', () => {
  let component: EditMenuItemsComponent;
  let fixture: ComponentFixture<EditMenuItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMenuItemsComponent]
    });
    fixture = TestBed.createComponent(EditMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
