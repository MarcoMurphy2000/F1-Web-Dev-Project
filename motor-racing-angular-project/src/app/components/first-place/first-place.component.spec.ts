import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPlaceComponent } from './first-place.component';

describe('FirstPlaceComponent', () => {
  let component: FirstPlaceComponent;
  let fixture: ComponentFixture<FirstPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstPlaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
