import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Youtube001Component } from './youtube001.component';

describe('Youtube001Component', () => {
  let component: Youtube001Component;
  let fixture: ComponentFixture<Youtube001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Youtube001Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Youtube001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
