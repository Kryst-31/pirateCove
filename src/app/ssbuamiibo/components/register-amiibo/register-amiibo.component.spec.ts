import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAmiiboComponent } from './register-amiibo.component';

describe('RegisterAmiiboComponent', () => {
  let component: RegisterAmiiboComponent;
  let fixture: ComponentFixture<RegisterAmiiboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAmiiboComponent]
    });
    fixture = TestBed.createComponent(RegisterAmiiboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
