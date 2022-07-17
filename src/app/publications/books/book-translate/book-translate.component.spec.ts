import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTranslateComponent } from './book-translate.component';

describe('BookTranslateComponent', () => {
  let component: BookTranslateComponent;
  let fixture: ComponentFixture<BookTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTranslateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
