import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ud33ComponentComponent } from './ud33-component.component';

describe('Ud33ComponentComponent', () => {
  let component: Ud33ComponentComponent;
  let fixture: ComponentFixture<Ud33ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ud33ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ud33ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
