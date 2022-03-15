import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacysformComponent } from './pharmacysform.component';

describe('PharmacysformComponent', () => {
  let component: PharmacysformComponent;
  let fixture: ComponentFixture<PharmacysformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacysformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacysformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
