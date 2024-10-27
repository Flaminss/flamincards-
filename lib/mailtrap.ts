import { MailtrapClient } from "mailtrap";

const HOST = "sandbox.api.mailtrap.io";
const TOKEN = "6718d031cd3f3260a7566806233c48bd";
const TEST_INBOX_ID = 3236548;
const SENDER_EMAIL = "hello@example.com";
const RECIPIENT_EMAIL = "okoteteoopmt2022@futa.edu.ng";

export const client = new MailtrapClient({
  token: TOKEN,
  testInboxId: TEST_INBOX_ID,
  // sandbox: true,
});

(function TestingEnvironment() {
  const sender = {
    email: SENDER_EMAIL,
    name: "Mailtrap Test",
  };

  const recipients = [
    {
      email: RECIPIENT_EMAIL,
    },
  ];

  client
    .send({
      from: sender,
      to: recipients,
      subject: "You are awesome!",
      text: "Congrats for sending test email with Mailtrap!",
      category: "Integration Test",
    })
    .then(console.log, console.error);
})();
