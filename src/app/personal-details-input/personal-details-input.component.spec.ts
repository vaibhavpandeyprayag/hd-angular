import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsInputComponent } from './personal-details-input.component';

describe('PersonalDetailsInputComponent', () => {
  let component: PersonalDetailsInputComponent;
  let fixture: ComponentFixture<PersonalDetailsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDetailsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
