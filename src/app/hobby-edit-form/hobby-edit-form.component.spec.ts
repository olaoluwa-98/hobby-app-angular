import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyEditFormComponent } from './hobby-edit-form.component';

describe('HobbyEditFormComponent', () => {
  let component: HobbyEditFormComponent;
  let fixture: ComponentFixture<HobbyEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
