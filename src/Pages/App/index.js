import React from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Loader from "../../components/Loader";

import Home from "../Home";
import Login from "../Login";
import Welcome from "../Welcome";
import TwelveQuestions from "../TweleveQuestions";

const App = () => {
  return (
    <>
      <Loader />
      <Router>
        <Route path="/list">
          <div>
            <ul>
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
                <Link to="/twelve-questions-end">12 Pertanyaan Selesai</Link>
              </li>
              <li>
                <Link to="/twelve-result">12 Pertanyaan Hasil</Link>
              </li>
              <li>
                <Link to="/fourty-eight-questions">48 Pertanyaan</Link>
              </li>
              <li>
                <Link to="/fourty-eight-questions-end">
                  48 Pertanyaan Selesai
                </Link>
              </li>
              <li>
                <Link to="/fourty-eight--result">48 Pertanyaan (Hasil)</Link>
              </li>
              <li>
                <Link to="/premium-regoster">Setelah daftar premium</Link>
              </li>
            </ul>
          </div>
        </Route>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/twelve-questions" component={TwelveQuestions} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
