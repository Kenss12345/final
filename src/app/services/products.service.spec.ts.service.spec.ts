import { TestBed } from '@angular/core/testing';

import { ProductsServiceSpecTsService } from './products.service.spec.ts.service';

describe('ProductsServiceSpecTsService', () => {
  let service: ProductsServiceSpecTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServiceSpecTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
