

export class Shipping {

  calculateShipping(totalPrice: number): number {
    const shippingDiscount = this.getShippingDiscount(totalPrice)
    return shippingDiscount.apply(totalPrice)
  }

  getShippingDiscount(totalPrice: number): ShippingDiscount {
    if( totalPrice > 200) {
      return new FreeShipping()
    }

    if( totalPrice > 100) {
      return new HalfShipping()
    }

    return new StardandShipping()
  }
}

interface ShippingDiscount {
  apply(totalPrice: number): number
}

const shippingCost = 25

class FreeShipping implements ShippingDiscount {
  apply(totalPrice: number): number {
    const freeShippingThreshold = 200
    return totalPrice > freeShippingThreshold ? 0 : 25
  }
}

class HalfShipping implements ShippingDiscount {
  apply(totalPrice: number): number {
    return totalPrice > 100 ? shippingCost / 2 : shippingCost
  }
}

class StardandShipping implements ShippingDiscount {
  apply(): number {
    return shippingCost
  }
}
