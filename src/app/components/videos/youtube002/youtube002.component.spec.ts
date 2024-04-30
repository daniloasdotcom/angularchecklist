import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Youtube002Component } from './youtube002.component';

describe('Youtube002Component', () => {
  let component: Youtube002Component;
  let fixture: ComponentFixture<Youtube002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Youtube002Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Youtube002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
