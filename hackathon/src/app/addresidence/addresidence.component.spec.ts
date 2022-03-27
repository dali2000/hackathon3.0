import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresidenceComponent } from './addresidence.component';

describe('AddresidenceComponent', () => {
  let component: AddresidenceComponent;
  let fixture: ComponentFixture<AddresidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddresidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
