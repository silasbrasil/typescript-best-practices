export interface Product {
  name: string;
  price: number;
  quantity: number;
  taxRate: number;
  description?: string;
  total: number;
}

type ProductInput = Omit<Product, 'total'>;

export class ProductBuilder<T extends Partial<ProductInput>> {
  #product: T;

  private constructor(product: T) {
    this.#product = product;
  }

  static create(): ProductBuilder<{}> {
    return new ProductBuilder({});
  }

  setName(name: string): ProductBuilder<T & { name: string }> {
    return new ProductBuilder({ ...this.#product, name });
  }

  setPrice(price: number): ProductBuilder<T & { price: number }> {
    return new ProductBuilder({ ...this.#product, price });
  }

  setQuantity(quantity: number): ProductBuilder<T & { quantity: number }> {
    return new ProductBuilder({ ...this.#product, quantity });
  }

  setTaxRate(taxRate: number): ProductBuilder<T & { taxRate: number }> {
    return new ProductBuilder({ ...this.#product, taxRate });
  }

  setDescription(description: string): ProductBuilder<T & { description: string }> {
    return new ProductBuilder({ ...this.#product, description });
  }

  build(this: ProductBuilder<ProductInput>): Product {
    const { price, quantity, taxRate } = this.#product;

    return {
      ...this.#product,
      total: price * quantity * (1 + taxRate),
    };
  }
}

const product1 = ProductBuilder.create()
  .setName("Laptop")
  .setPrice(1000)
  .setTaxRate(0.2)
  .setQuantity(2)
  .build();

const product2 = ProductBuilder.create()
  .setName("Smartphone")
  .setPrice(500)
  .setTaxRate(0.15)
  .setQuantity(3)
  .setDescription("Latest model with advanced features")
  .build();

console.log(product1);
console.log(product2);


