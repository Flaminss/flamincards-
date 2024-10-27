import * as httpRequest from "@lib/http-cycle-handler";

export default httpRequest.createHandler({
  baseURL: "",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
