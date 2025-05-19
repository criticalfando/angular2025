import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaBajaComponent } from './tienda-buscar.component';

describe('TiendaBajaComponent', () => {
  let component: TiendaBajaComponent;
  let fixture: ComponentFixture<TiendaBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaBajaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
