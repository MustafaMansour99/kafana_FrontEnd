import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountlistComponent } from './accountlist.component';

describe('AccountlistComponent', () => {
  let component: AccountlistComponent;
  let fixture: ComponentFixture<AccountlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountlistComponent]
    });
    fixture = TestBed.createComponent(AccountlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
