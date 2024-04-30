import { ComponentFixture, TestBed } from '@angular/core/testing';

import { youtube02Component } from './youtube02.component';

describe('Youtube02Component', () => {
  let component: youtube02Component;
  let fixture: ComponentFixture<youtube02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [youtube02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(youtube02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
