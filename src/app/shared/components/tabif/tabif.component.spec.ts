import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabifComponent } from './tabif.component';

describe('TabifComponent', () => {
  let component: TabifComponent;
  let fixture: ComponentFixture<TabifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
