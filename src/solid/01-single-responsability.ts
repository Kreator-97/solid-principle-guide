
// La siguiente class rompe con el principio de responsabilidad única
export class Sale {
  constructor(
    public id: number,
    public product: string,
    public quantity: number,
    public price: number
  ) {}

  get total(): number {
    return this.quantity * this.price
  }
  get totalWithTax(): number {
    return this.total * 1.21
  }

  get totalWithShipping(): number {
    return this.totalWithTax + 35
  }
}

export class SaleReport {
  constructor(private sale: Sale) {}

  generate() {
    console.log('Generating report')
    // Aquí se generaría el reporte
  }
}

export class SaleEmailNotification {
  constructor(private sale: Sale) {}

  send() {
    console.log('Sending email')
    // Aquí se enviaría el email
  }
}

export class BillingService {
  constructor(private sale: Sale) {}

  generate() {
    console.log('Generating bill')
    // Aquí se generaría la factura
  }
}
