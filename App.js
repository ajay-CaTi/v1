import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", { id: "duniya" }, "This is sibling 2"),
    React.createElement("h2", { id: "duniya" }, "This is sibling 1"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", { id: "duniya" }, "This is sibling 2"),
    React.createElement("h2", { id: "duniya" }, "This is sibling 1"),
  ]),
]); // This is CORE of react
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
