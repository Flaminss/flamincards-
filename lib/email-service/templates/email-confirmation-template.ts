import { EmailFormatter } from "../formatter";

export default new EmailFormatter<{
  name: string;
  email: string;
  url: string;
}>({}).write({
  subject: "Email Confirmation",
  body: "Go to this link to confirm your email: {{url}}",
});
