import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormCVAComponent } from './book-form.component';

describe('BookFormComponent', () => {
  let component: BookFormCVAComponent;
  let fixture: ComponentFixture<BookFormCVAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFormCVAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormCVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
