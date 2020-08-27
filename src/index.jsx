import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useRoutes } from "hookrouter";
import Header from "./components/Header";
import Builder from "./components/Builder";
import Menu from "./components/Menu";
import Login from "./components/Login";
import "./style.scss";

const routes = {
  "/": () => (
    <>
      <Header id="demo"></Header>
      <Builder id="demo"></Builder>
    </>
  ),
  "/login": () => <Login />,
  "/:name": ({name}) => <Menu id={name} />,
};

function App() {
  useEffect(() => {
    const root = document.getElementById("root");

    document.addEventListener("keydown", function (e) {
      if (e.keyCode === 9) {
        root.classList.remove("hide-focus-outlines");
      }
    });

    document.addEventListener("click", function (e) {
      root.classList.add("hide-focus-outlines");
    });
  }, []);

  const routeResult = useRoutes(routes);

  return routeResult || <h1>404 Not Found</h1>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
