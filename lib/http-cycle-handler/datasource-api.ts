import httpRequest from "@lib/http-cycle-handler";

export default httpRequest.handlerInstance({
  baseURL: "",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
