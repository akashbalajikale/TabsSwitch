import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtabforComponent } from './ngtabfor.component';

describe('NgtabforComponent', () => {
  let component: NgtabforComponent;
  let fixture: ComponentFixture<NgtabforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtabforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgtabforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
