import "./App.css";
import React from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import SearchMovie from "./components/SearchMovie";

const App = () => (
  <div>
    <ul>
      <li>
        <NavLink
          activeStyle={{
            color: "fuchsia",
            textDecoration: "none",
            fontWeight: "500",
          }}
          style={{
            marginRight: "16px",
            color: "inherit",
            textDecoration: "none",
            fontWeight: "500",
          }}
          exact
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          activeStyle={{
            color: "fuchsia",
            textDecoration: "none",
            fontWeight: "500",
          }}
          style={{
            color: "inherit",
            textDecoration: "none",
            fontWeight: "500",
          }}
          to="/movies"
        >
          Movies
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={SearchMovie} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />

      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
