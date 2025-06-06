import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaComponent } from './alta.component';

describe('AltaComponent', () => {
  let component: AltaComponent;
  let fixture: ComponentFixture<AltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
