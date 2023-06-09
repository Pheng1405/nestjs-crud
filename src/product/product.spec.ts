import { Test, TestingModule } from '@nestjs/testing';
import { Product } from './product.service';

describe('Product', () => {
  let provider: Product;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Product],
    }).compile();

    provider = module.get<Product>(Product);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
