import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalDetailsItemComponent } from './educational-details-item.component';

describe('EducationalDetailsItemComponent', () => {
  let component: EducationalDetailsItemComponent;
  let fixture: ComponentFixture<EducationalDetailsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalDetailsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
