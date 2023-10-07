import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuShoppingComponent } from './menu-shopping.component';

describe('MenuShoppingComponent', () => {
  let component: MenuShoppingComponent;
  let fixture: ComponentFixture<MenuShoppingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuShoppingComponent]
    });
    fixture = TestBed.createComponent(MenuShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
