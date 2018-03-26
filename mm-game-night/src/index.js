import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Wrapper from "./Wrapper";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Wrapper />, document.getElementById("root"));
registerServiceWorker();
