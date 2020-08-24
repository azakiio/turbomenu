import React from "react";
import ReactDOM from "react-dom";
import { useRoutes } from "hookrouter";
import Header from "./components/Header";
import Builder from "./components/Builder";
import Menu from "./components/Menu";
import "./style.scss";


const routes = {
  "/": () => (
    <>
      <Header restaurant="Fawzi's Restaurant" link="https://fawziammache.com"></Header>
      <Builder></Builder>
    </>
  ),
  "/:name": (name) => <Menu name={name} />,
};

function App() {
  const routeResult = useRoutes(routes);

  return routeResult || <h1>404 Not Found</h1>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
