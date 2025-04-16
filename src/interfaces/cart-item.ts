import { Product } from "./products"

export interface CartItem {
  id: string
  quantity: number
  product: Product
}
