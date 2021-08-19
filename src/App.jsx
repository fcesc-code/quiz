import React from "react";
import "./css/app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./components/PageNotFound.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LeaderBoard from "./components/LeaderBoard.jsx";
import LoginScreen from "./components/LoginScreen.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Question from "./components/Question.jsx";
import Game from "./components/Game.jsx";
import Answer from "./components/Answer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import * as ROUTES from "./config/routes";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <ErrorBoundary>
            <Route path={ROUTES.HOME} exact component={Dashboard} />
            <Route path={ROUTES.LEADERBOARD} component={LeaderBoard} />
            <Route path={ROUTES.LOGIN} component={LoginScreen} />
            <Route path={ROUTES.QUESTION} component={Question} />
            <Route path={ROUTES.THEMES_WILDCARD} component={Game} />
            <Route path={ROUTES.ANSWER} component={Answer} />
            <Route component={PageNotFound} />
          </ErrorBoundary>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
