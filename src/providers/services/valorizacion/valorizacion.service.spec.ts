import { TestBed, inject } from '@angular/core/testing';

import { ValorizacionService } from './valorizacion.service';

describe('ValorizacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValorizacionService]
    });
  });

  it('should be created', inject([ValorizacionService], (service: ValorizacionService) => {
    expect(service).toBeTruthy();
  }));
});
