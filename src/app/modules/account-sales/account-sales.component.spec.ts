import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSalesComponent } from './account-sales.component';

describe('AccountSalesComponent', () => {
  let component: AccountSalesComponent;
  let fixture: ComponentFixture<AccountSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
