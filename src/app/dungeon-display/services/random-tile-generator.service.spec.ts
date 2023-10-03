import { TestBed } from '@angular/core/testing';

import { RandomTileGeneratorService } from './random-tile-generator.service'

describe('RandomTileGeneratorService', () => {
  let service: RandomTileGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomTileGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
