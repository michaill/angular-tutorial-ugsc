import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineListGenericComponent } from './magazine-list.component';

describe('MagazineListComponent', () => {
  let component: MagazineListGenericComponent;
  let fixture: ComponentFixture<MagazineListGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazineListGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineListGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
