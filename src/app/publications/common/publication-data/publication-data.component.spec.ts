import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationDataComponent } from './publication-data.component';

describe('PublicationDataComponent', () => {
  let component: PublicationDataComponent;
  let fixture: ComponentFixture<PublicationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
