import { TestBed } from '@angular/core/testing';

import { MatdialogueService } from './matdialogue.service';

describe('MatdialogueService', () => {
  let service: MatdialogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatdialogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
