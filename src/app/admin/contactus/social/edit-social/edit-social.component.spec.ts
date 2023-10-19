import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSocialComponent } from './edit-social.component';

describe('EditSocialComponent', () => {
  let component: EditSocialComponent;
  let fixture: ComponentFixture<EditSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSocialComponent]
    });
    fixture = TestBed.createComponent(EditSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
