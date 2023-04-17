import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalDetailsInputComponent } from './educational-details-input.component';

describe('EducationalDetailsInputComponent', () => {
  let component: EducationalDetailsInputComponent;
  let fixture: ComponentFixture<EducationalDetailsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalDetailsInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalDetailsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
