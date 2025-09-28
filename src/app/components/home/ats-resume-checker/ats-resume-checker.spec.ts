import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtsResumeChecker } from './ats-resume-checker';

describe('AtsResumeChecker', () => {
  let component: AtsResumeChecker;
  let fixture: ComponentFixture<AtsResumeChecker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtsResumeChecker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtsResumeChecker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
