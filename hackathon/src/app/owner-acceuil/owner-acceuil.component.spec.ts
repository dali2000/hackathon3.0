import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAcceuilComponent } from './owner-acceuil.component';

describe('OwnerAcceuilComponent', () => {
  let component: OwnerAcceuilComponent;
  let fixture: ComponentFixture<OwnerAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerAcceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
