import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyEditComponent } from './hobby-edit.component';

describe('HobbyEditComponent', () => {
  let component: HobbyEditComponent;
  let fixture: ComponentFixture<HobbyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
