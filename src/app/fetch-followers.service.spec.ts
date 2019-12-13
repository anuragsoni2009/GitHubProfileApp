import { TestBed } from '@angular/core/testing';

import { FetchFollowersService } from './fetch-followers.service';

describe('FetchFollowersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchFollowersService = TestBed.get(FetchFollowersService);
    expect(service).toBeTruthy();
  });
});
