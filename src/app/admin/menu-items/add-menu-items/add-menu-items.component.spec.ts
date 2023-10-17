import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuItemsComponent } from './add-menu-items.component';

describe('AddMenuItemsComponent', () => {
  let component: AddMenuItemsComponent;
  let fixture: ComponentFixture<AddMenuItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMenuItemsComponent]
    });
    fixture = TestBed.createComponent(AddMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
