import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppquicksidebarComponent } from './appquicksidebar.component';

describe('AppquicksidebarComponent', () => {
  let component: AppquicksidebarComponent;
  let fixture: ComponentFixture<AppquicksidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppquicksidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppquicksidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
