/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConceptFactoryService } from './concept-factory.service';

describe('ConceptFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConceptFactoryService]
    });
  });

  it('should ...', inject([ConceptFactoryService], (service: ConceptFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
