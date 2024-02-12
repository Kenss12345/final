import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCompradoresComponent } from './register-compradores.component';

describe('RegisterCompradoresComponent', () => {
  let component: RegisterCompradoresComponent;
  let fixture: ComponentFixture<RegisterCompradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCompradoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterCompradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
