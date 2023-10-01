import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAppComponent } from './job-app.component';

describe('JobAppComponent', () => {
  let component: JobAppComponent;
  let fixture: ComponentFixture<JobAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobAppComponent]
    });
    fixture = TestBed.createComponent(JobAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
