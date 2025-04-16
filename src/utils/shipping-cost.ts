
export function calculateShipping(totalPrice: number): number {
  // shipping is free is the order is over $200
  const shippingCost = 25
  const freeShippingThreshold = 200

  return totalPrice > freeShippingThreshold
    ? 0
    : shippingCost
}