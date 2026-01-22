import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasComponent } from './salas';

describe('SalasComponent', () => {
  let component: SalasComponent;
  let fixture: ComponentFixture<SalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
