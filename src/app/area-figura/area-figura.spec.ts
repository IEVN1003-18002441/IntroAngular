import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaFigura } from './area-figura';

describe('AreaFigura', () => {
  let component: AreaFigura;
  let fixture: ComponentFixture<AreaFigura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreaFigura],
    }).compileComponents();

    fixture = TestBed.createComponent(AreaFigura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
