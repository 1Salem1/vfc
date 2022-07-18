import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiResultComponent } from './ski-result.component';

describe('SkiResultComponent', () => {
  let component: SkiResultComponent;
  let fixture: ComponentFixture<SkiResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
