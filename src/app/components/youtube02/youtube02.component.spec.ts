import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Youtube02Component } from './youtube02.component';

describe('Youtube02Component', () => {
  let component: Youtube02Component;
  let fixture: ComponentFixture<Youtube02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Youtube02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Youtube02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
