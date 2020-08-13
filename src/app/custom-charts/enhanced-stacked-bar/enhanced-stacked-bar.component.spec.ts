import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedStackedBarComponent } from './enhanced-stacked-bar.component';

describe('EnhancedStackedBarComponent', () => {
  let component: EnhancedStackedBarComponent;
  let fixture: ComponentFixture<EnhancedStackedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnhancedStackedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedStackedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
