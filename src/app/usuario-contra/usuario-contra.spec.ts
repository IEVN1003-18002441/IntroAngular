import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioContra } from './usuario-contra';

describe('UsuarioContra', () => {
  let component: UsuarioContra;
  let fixture: ComponentFixture<UsuarioContra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioContra],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioContra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
