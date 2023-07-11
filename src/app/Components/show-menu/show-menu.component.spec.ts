import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMenuComponent } from './show-menu.component';

describe('ShowMenuComponent', () => {
  let component: ShowMenuComponent;
  let fixture: ComponentFixture<ShowMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowMenuComponent]
    });
    fixture = TestBed.createComponent(ShowMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
