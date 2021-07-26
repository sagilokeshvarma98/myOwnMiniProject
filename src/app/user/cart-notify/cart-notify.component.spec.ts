import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartNotifyComponent } from './cart-notify.component';

describe('CartNotifyComponent', () => {
  let component: CartNotifyComponent;
  let fixture: ComponentFixture<CartNotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartNotifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
