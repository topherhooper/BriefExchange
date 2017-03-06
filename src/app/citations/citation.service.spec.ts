/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CitationService } from './citation.service';

describe('CitationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitationService]
    });
  });

  it('should ...', inject([CitationService], (service: CitationService) => {
    expect(service).toBeTruthy();
  }));
});
