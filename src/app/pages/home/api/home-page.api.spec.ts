import { TestBed } from '@angular/core/testing';

import { HomePageApi } from './home-page.api';

describe('HomePageApiService', () => {
  let service: HomePageApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
