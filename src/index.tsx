import React from "react";
import ReactDOM from "react-dom";
import "fontsource-roboto/latin.css";
import App from "modules/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
