import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRestrictionsComponent } from './set-restrictions.component';

describe('SetRestrictionsComponent', () => {
  let component: SetRestrictionsComponent;
  let fixture: ComponentFixture<SetRestrictionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetRestrictionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRestrictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
