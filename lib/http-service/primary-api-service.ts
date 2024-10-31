import * as httpRequest from "@/lib/http-service";

export default httpRequest.createHandler({
  baseURL: "",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
