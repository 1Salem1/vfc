import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseYourGearComponent } from './choose-your-gear.component';

describe('ChooseYourGearComponent', () => {
  let component: ChooseYourGearComponent;
  let fixture: ComponentFixture<ChooseYourGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseYourGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseYourGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
