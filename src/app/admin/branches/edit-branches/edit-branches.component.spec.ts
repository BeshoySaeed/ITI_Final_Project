import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBranchesComponent } from './edit-branches.component';

describe('EditBranchesComponent', () => {
  let component: EditBranchesComponent;
  let fixture: ComponentFixture<EditBranchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBranchesComponent]
    });
    fixture = TestBed.createComponent(EditBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
