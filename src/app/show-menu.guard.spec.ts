import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { showMenuGuard } from './show-menu.guard';

describe('showMenuGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => showMenuGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
