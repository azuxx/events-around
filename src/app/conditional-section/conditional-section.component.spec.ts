import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalSectionComponent } from './conditional-section.component';

describe('ConditionalSectionComponent', () => {
  let component: ConditionalSectionComponent;
  let fixture: ComponentFixture<ConditionalSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
