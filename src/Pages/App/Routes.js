import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Welcome from "../Welcome";
import TwelveQuestions from "../TweleveQuestions";
import TwelveQuestionsResult from "../TwelveQuestionsResult";
import FourtyEightQuestions from "../FourtyEightQuestions";
import FourtyEightResult from "../FourtyEightResult";
import PremiumPage from "../PremiumPage/PremiumPage";
import Profile from "../Profile";
import ChartSampel from "../ChartSample";
import SliderExample from "../SliderExample";

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/twelve-questions" component={TwelveQuestions} />
        <Route
          path="/twelve-questions-result"
          component={TwelveQuestionsResult}
        />
        <Route
          path="/fourty-eight-questions"
          component={FourtyEightQuestions}
        />
        <Route path="/fourty-eight-result" component={FourtyEightResult} />
        <Route path="/premium-page" component={PremiumPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/chart-sample" component={ChartSampel} />
        <Route path="/slider-example" component={SliderExample} />
      </Switch>
    </div>
  );
};

export default Routes;
