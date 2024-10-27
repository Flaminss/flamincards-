import ReactDOMServer from "react-dom/server";

export const contentFromReact = (App: React.ReactElement) => {
  return ReactDOMServer.renderToString(App);
};
