import { ComponentFixture, TestBed } from '@angular/core/testing';

import EditarElimminarAnimalesComponent from './editar-elimminar-animales.component';

describe('EditarElimminarAnimalesComponent', () => {
  let component: EditarElimminarAnimalesComponent;
  let fixture: ComponentFixture<EditarElimminarAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarElimminarAnimalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarElimminarAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
