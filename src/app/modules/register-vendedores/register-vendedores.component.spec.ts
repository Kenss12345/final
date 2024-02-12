import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVendedoresComponent } from './register-vendedores.component';

describe('RegisterVendedoresComponent', () => {
  let component: RegisterVendedoresComponent;
  let fixture: ComponentFixture<RegisterVendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterVendedoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
