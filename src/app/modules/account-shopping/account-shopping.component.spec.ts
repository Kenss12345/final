import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountShoppingComponent } from './account-shopping.component';

describe('AccountShoppingComponent', () => {
  let component: AccountShoppingComponent;
  let fixture: ComponentFixture<AccountShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountShoppingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
