import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubscribeComponent } from './add-subscribe.component';

describe('AddSubscribeComponent', () => {
  let component: AddSubscribeComponent;
  let fixture: ComponentFixture<AddSubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubscribeComponent]
    });
    fixture = TestBed.createComponent(AddSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
