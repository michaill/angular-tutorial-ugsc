import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineTranslateComponent } from './magazine-translate.component';

describe('MagazineTranslateComponent', () => {
  let component: MagazineTranslateComponent;
  let fixture: ComponentFixture<MagazineTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineTranslateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
