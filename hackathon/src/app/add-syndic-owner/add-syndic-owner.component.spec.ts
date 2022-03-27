import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSyndicOwnerComponent } from './add-syndic-owner.component';

describe('AddSyndicOwnerComponent', () => {
  let component: AddSyndicOwnerComponent;
  let fixture: ComponentFixture<AddSyndicOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSyndicOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSyndicOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
