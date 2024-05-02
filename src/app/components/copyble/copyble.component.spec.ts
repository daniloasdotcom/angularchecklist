import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopybleComponent } from './copyble.component';

describe('CopybleComponent', () => {
  let component: CopybleComponent;
  let fixture: ComponentFixture<CopybleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopybleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopybleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
