import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFoundPage from "./pages/notFoundPage";
import LandingPage from "./pages/landingPage";
import LoginNav from "./pages/auth/loginNavigation";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import WelcomePage from "./pages/welcomepage";
import Category from "./pages/article/category";
import Article from "./pages/article/article";
import EventPage from "./pages/article/eventPage";
import PodcastPage from "./pages/article/podcast";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/loginNavigation">
            <LoginNav />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/welcome">
            <WelcomePage />
          </Route>

          <Route exact path="/:category(news|blogs|podcasts)">
            <Category />
          </Route>

          <Route exact path="/:category(news|blogs)/:id">
            <Article />
          </Route>

          <Route exact path="/events">
            <EventPage/>
          </Route>

          <Route exact path="/podcasts/:id">
            <PodcastPage/>
          </Route>

          <Route exact path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
