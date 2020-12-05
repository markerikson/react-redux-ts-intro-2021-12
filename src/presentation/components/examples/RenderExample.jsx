import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
  return <div>Hello World!</div>;
}

const parentNode = document.getElementById("root");
ReactDOM.render(<HelloWorld />, parentNode);
