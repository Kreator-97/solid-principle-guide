
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

  generateReports() {
    console.log('Generating reports')
    // Aquí se generaría el reporte
  }

  sendEmail() {
    console.log('Sending email')
    // Aquí se enviaría el email
  }

  generateBill() {
    console.log('Generating bill')
    // Aquí se generaría la factura
  }
}