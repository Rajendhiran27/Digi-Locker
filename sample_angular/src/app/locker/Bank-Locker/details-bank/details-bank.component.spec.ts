import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBankComponent } from './details-bank.component';

describe('DetailsBankComponent', () => {
  let component: DetailsBankComponent;
  let fixture: ComponentFixture<DetailsBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
