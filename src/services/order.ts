// import { Nodemailer } from "../classes/emails/nodemailer";
import { ResendMailer } from "../classes/emails/resend";
import { EmailNotifier } from "../interfaces/notifiers/email";

export class OrderService {

  constructor(
    private readonly mailer: EmailNotifier
  ) {}

  async paidOrder(order: any): Promise<any> { // eslint-disable-line @typescript-eslint/no-explicit-any
    // Logic to create an order
    console.log("Creating order:", order);

    await this.mailer.sendEmail('donato@weareproficient.com', `Order ${order.id} has been paid!`);
    return order;
  }
}

export const orderService = new OrderService(new ResendMailer())
