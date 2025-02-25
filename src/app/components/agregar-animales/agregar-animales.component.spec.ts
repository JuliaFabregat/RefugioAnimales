import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAnimalesComponent } from './agregar-animales.component';

describe('AgregarAnimalesComponent', () => {
  let component: AgregarAnimalesComponent;
  let fixture: ComponentFixture<AgregarAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarAnimalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
