import { client } from "../mailtrap";
import { EmailFormatter } from "./formatter";

type Address = {
  name?: string;
  email: string;
};

interface EmailCourierCreator {
  from: Address;
  to: Address[];
  formatter: EmailFormatter<any>;

  deliver: (...args: any[]) => void;
}

export class EmailCourier implements EmailCourierCreator {
  from: Address;
  to: Address[];
  formatter: EmailFormatter<any>;

  constructor(
    address: { from: Address; to: Address[] },
    formatter: EmailFormatter<any>
  ) {
    this.from = address.from;
    this.to = address.to;
    this.formatter = formatter;
  }

  deliver = async () => {
    const { subject, body, template } = this.formatter.mail();

    return client.send({
      from: this.from,
      to: this.to,
      subject,
      html: body,
      // template_uuid: template?.uuid,
      // template_variables: template?.variables,
    });
  };
}
