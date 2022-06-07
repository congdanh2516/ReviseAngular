import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingcomunicationComponent } from './siblingcomunication.component';

describe('SiblingcomunicationComponent', () => {
  let component: SiblingcomunicationComponent;
  let fixture: ComponentFixture<SiblingcomunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingcomunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingcomunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
