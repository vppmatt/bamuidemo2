import { TestBed } from '@angular/core/testing';

import { UserPrefetchService } from './user-prefetch.service';

describe('UserPrefetchService', () => {
  let service: UserPrefetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPrefetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
