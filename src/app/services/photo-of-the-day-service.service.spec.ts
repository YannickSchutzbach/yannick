import { TestBed } from '@angular/core/testing';

import { PhotoOfTheDayServiceService } from './photo-of-the-day-service.service';

describe('PhotoOfTheDayServiceService', () => {
  let service: PhotoOfTheDayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoOfTheDayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
