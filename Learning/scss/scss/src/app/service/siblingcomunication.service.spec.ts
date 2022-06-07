import { TestBed } from '@angular/core/testing';

import { SiblingcomunicationService } from './siblingcomunication.service';

describe('SiblingcomunicationService', () => {
  let service: SiblingcomunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiblingcomunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
