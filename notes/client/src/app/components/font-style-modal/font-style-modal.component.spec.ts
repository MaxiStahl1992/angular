import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontStyleModalComponent } from './font-style-modal.component';

describe('FontStyleModalComponent', () => {
  let component: FontStyleModalComponent;
  let fixture: ComponentFixture<FontStyleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontStyleModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontStyleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
