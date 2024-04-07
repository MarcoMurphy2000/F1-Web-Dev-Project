import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPodiumComponent } from './result-podium.component';

describe('ResultPodiumComponent', () => {
  let component: ResultPodiumComponent;
  let fixture: ComponentFixture<ResultPodiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultPodiumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultPodiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
