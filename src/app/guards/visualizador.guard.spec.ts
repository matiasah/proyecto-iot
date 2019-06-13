import { TestBed, async, inject } from '@angular/core/testing';

import { VisualizadorGuard } from './visualizador.guard';

describe('VisualizadorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisualizadorGuard]
    });
  });

  it('should ...', inject([VisualizadorGuard], (guard: VisualizadorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
