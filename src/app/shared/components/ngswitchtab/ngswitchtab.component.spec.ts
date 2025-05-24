import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchtabComponent } from './ngswitchtab.component';

describe('NgswitchtabComponent', () => {
  let component: NgswitchtabComponent;
  let fixture: ComponentFixture<NgswitchtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchtabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgswitchtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
