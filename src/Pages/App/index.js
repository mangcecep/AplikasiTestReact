import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routes from "./Routes";
import Loader from "../../components/Loader";

const App = () => {
  return (
    <>
      <Loader />
      <Router>
        <Route path="/list">
          <div>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/welcome">Welcome</Link>
              </li>
              <li>
                <Link to="/twelve-questions">12 Pertanyaan</Link>
              </li>
              <li>
                <Link to="/twelve-questions-result">12 Pertanyaan Hasil</Link>
              </li>
              <li>
                <Link to="/fourty-eight-questions">48 Pertanyaan</Link>
              </li>
              <li>
                <Link to="/fourty-eight-result">48 Pertanyaan (Hasil)</Link>
              </li>
              <li>
                <Link to="/premium-page">premium page</Link>
              </li>
              <li>
                <Link to="/profile">profile</Link>
              </li>
              <li>
                <Link to="/chart-sample">Chart Sample</Link>
              </li>
            </ol>
          </div>
        </Route>
        <Routes />
      </Router>
    </>
  );
};

export default App;
