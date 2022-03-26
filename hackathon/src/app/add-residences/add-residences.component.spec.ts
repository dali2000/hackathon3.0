import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResidencesComponent } from './add-residences.component';

describe('AddResidencesComponent', () => {
  let component: AddResidencesComponent;
  let fixture: ComponentFixture<AddResidencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResidencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
