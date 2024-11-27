import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TennisControlPage } from './tennis-control.page';

describe('TennisControlPage', () => {
  let component: TennisControlPage;
  let fixture: ComponentFixture<TennisControlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
