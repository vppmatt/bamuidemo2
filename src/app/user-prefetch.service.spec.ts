import { TestBed } from '@angular/core/testing';

import { UserPrefetchService } from './user-prefetch.service';
import { provideHttpClient } from '@angular/common/http';

describe('UserPrefetchService', () => {
  let service: UserPrefetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(UserPrefetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
