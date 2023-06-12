import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import "./styles/index.scss";
import App from "./App";
// eslint-disable-next-line no-unused-vars
import { HashRouter as Router } from "react-router-dom";

// ReactDOM.render((<Router><App/></Router>),
// document.getElementById('root'));

// ReactDOM.render(
//     <React.StrictMode>
//       <Router>
//         <App />
//       </Router>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );

ReactDOM.render(<App />, document.getElementById("root"));

ReactGA.initialize("G-4QXX1B6CY4");
ReactGA.pageview(window.location.pathname + window.location.search);
