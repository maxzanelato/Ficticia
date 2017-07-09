import { TestBed, inject } from '@angular/core/testing';

import { BancoDeDadosUsuarioService } from './banco-de-dados-usuario.service';

describe('BancoDeDadosUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BancoDeDadosUsuarioService]
    });
  });

  it('should be created', inject([BancoDeDadosUsuarioService], (service: BancoDeDadosUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
