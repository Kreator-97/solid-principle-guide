import { Product as ProductInterface} from '../interfaces/products';

export class Product implements ProductInterface {

  id: string
  title: string
  description?: string
  price: number
  image?: string

  constructor(id: string, name: string, description: string, price: number, imageUrl: string) {
    this.id = id
    this.title = name
    this.description = description
    this.price = price
    this.image = imageUrl
  }
}

interface Shippable {
  ship(): void
}

export class PhysicalProduct extends Product implements Shippable {
  ship(): void {
    console.log('Shipping product')
  }
}

export class DigitalProduct extends Product {
  constructor(id: string, name: string, description: string, price: number, imageUrl: string) {
    super(id, name, description, price, imageUrl)
  }
}

const products: Array<PhysicalProduct> = [
  new PhysicalProduct('1', 'Product 1', 'Description 1', 100, 'https://example.com/product1.jpg'),
  new PhysicalProduct('2', 'Product 2', 'Description 2', 200, 'https://example.com/product2.jpg')
]

products.forEach(product => {
  console.log(product.title)
  product.ship()
})

