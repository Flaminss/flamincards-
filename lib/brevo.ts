import brevo from "@getbrevo/brevo";

const API_KEY =
  "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";

const emailClient = new brevo.TransactionalEmailsApi();
emailClient.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, API_KEY);

const emailClientCourier = new brevo.SendSmtpEmail();

// TEST
(function TEST() {
  emailClientCourier.subject = "My {{params.subject}}";
  emailClientCourier.htmlContent =
    "<html><body><h1>Common: This is my first transactional email {{params.parameter}}</h1></body></html>";
  emailClientCourier.sender = {
    name: "John",
    email: "shubham.upadhyay@sendinblue.com",
  };
  emailClientCourier.to = [
    { email: "shubham.upadhyay@sendinblue.com", name: "shubham upadhyay" },
  ];
  emailClientCourier.replyTo = {
    email: "shubham.upadhyay@sendinblue.com",
    name: "Shubham Upadhyay",
  };
  emailClientCourier.headers = { "Some-Custom-Name": "unique-id-1234" };
  emailClientCourier.params = {
    parameter: "My param value",
    subject: "common subject",
  };

  emailClient.sendTransacEmail(emailClientCourier).then(
    function (data) {
      console.log(
        "API called successfully. Returned data: " + JSON.stringify(data)
      );
    },
    function (error) {
      console.error(error);
    }
  );
})();
