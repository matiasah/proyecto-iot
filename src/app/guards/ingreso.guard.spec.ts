import { TestBed, async, inject } from '@angular/core/testing';

import { IngresoGuard } from './ingreso.guard';

describe('IngresoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngresoGuard]
    });
  });

  it('should ...', inject([IngresoGuard], (guard: IngresoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
