import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1MidComponent } from './section1-mid.component';

describe('Section1MidComponent', () => {
  let component: Section1MidComponent;
  let fixture: ComponentFixture<Section1MidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Section1MidComponent]
    });
    fixture = TestBed.createComponent(Section1MidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
