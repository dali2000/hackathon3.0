import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSyndicsComponent } from './list-syndics.component';

describe('ListSyndicsComponent', () => {
  let component: ListSyndicsComponent;
  let fixture: ComponentFixture<ListSyndicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSyndicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSyndicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
