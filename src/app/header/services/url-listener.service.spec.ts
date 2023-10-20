import { TestBed } from '@angular/core/testing';

import { UrlListenerService } from './url-listener.service';

describe('UrlListenerService', () => {
  let service: UrlListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
