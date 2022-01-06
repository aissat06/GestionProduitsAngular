import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsComponent } from './produits.component';
/** fichier pour les teste, on a pas besoin dans ce projet */
describe('ProduitsComponent', () => {
  let component: ProduitsComponent;
  let fixture: ComponentFixture<ProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
