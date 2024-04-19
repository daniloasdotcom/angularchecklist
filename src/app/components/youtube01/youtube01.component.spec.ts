import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Youtube01Component } from './youtube01.component';

describe('Youtube01Component', () => {
  let component: Youtube01Component;
  let fixture: ComponentFixture<Youtube01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Youtube01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Youtube01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
