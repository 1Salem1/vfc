import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiFormComponent } from './ski-form.component';

describe('SkiFormComponent', () => {
  let component: SkiFormComponent;
  let fixture: ComponentFixture<SkiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
