/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DALService } from './dal.service';

describe('DALService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DALService]
    });
  });

  it('should ...', inject([DALService], (service: DALService) => {
    expect(service).toBeTruthy();
  }));
});
