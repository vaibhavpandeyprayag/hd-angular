import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedItemComponent } from './added-item.component';

describe('AddedItemComponent', () => {
  let component: AddedItemComponent;
  let fixture: ComponentFixture<AddedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
