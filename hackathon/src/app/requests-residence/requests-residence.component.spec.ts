import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsResidenceComponent } from './requests-residence.component';

describe('RequestsResidenceComponent', () => {
  let component: RequestsResidenceComponent;
  let fixture: ComponentFixture<RequestsResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
