import { Cart as CartInterface } from '../interfaces/cart'
import { CartItem } from '../interfaces/cart-item'

export class Cart implements CartInterface {

  items: CartItem[] = []
  totalPrice: number = 0
  totalQuantity: number = 0

  static clone(cart: Cart): Cart {
    const newCart = new Cart()
    newCart.items = cart.items.map(item => ({ ...item }))
    newCart.totalPrice = cart.totalPrice
    newCart.totalQuantity = cart.totalQuantity
    return newCart
  }
}

export class CartOperation {
  
  static addItem(item: CartItem, cart: Cart): Cart {
    const newCart = Cart.clone(cart)

    newCart.items.push(item)
    this.calculateTotal(newCart)
    return newCart
  }

  static removeItem(itemId: string, cart: Cart) {
    const newCart = Cart.clone(cart)

    newCart.items = newCart.items.filter(item => item.product.id !== itemId)
    this.calculateTotal(newCart)
    return newCart
  }

  static calculateTotal(cart: Cart) {
    cart.totalPrice = cart.items.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0)
    cart.totalQuantity = cart.items.reduce((acc, curr) => acc + curr.quantity, 0)
  }

  static clearCart(cart: Cart) {
    const newCart = Cart.clone(cart)
    newCart.items = []
    newCart.totalPrice = 0
    newCart.totalQuantity = 0
    return newCart
  }
}
