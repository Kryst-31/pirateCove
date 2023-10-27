import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSBUAmiiboHomeComponent } from './ssbuamiibo-home.component';

describe('SSBUAmiiboHomeComponent', () => {
  let component: SSBUAmiiboHomeComponent;
  let fixture: ComponentFixture<SSBUAmiiboHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SSBUAmiiboHomeComponent]
    });
    fixture = TestBed.createComponent(SSBUAmiiboHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
