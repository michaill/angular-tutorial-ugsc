import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListGenericComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListGenericComponent;
  let fixture: ComponentFixture<BookListGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
