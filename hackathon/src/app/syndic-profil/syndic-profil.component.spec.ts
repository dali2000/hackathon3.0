import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyndicProfilComponent } from './syndic-profil.component';

describe('SyndicProfilComponent', () => {
  let component: SyndicProfilComponent;
  let fixture: ComponentFixture<SyndicProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyndicProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyndicProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
