import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStoreComponent } from './account-store.component';

describe('AccountStoreComponent', () => {
  let component: AccountStoreComponent;
  let fixture: ComponentFixture<AccountStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
