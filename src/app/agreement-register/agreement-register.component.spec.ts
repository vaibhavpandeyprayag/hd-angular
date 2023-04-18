import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementRegisterComponent } from './agreement-register.component';

describe('AgreementRegisterComponent', () => {
  let component: AgreementRegisterComponent;
  let fixture: ComponentFixture<AgreementRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreementRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
