import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Container } from "./style";
import Sidbar from "../components/Sidbar";
import { sidebar } from "../utils/sidebar";
import Notfound from "../components/Notfound";
export const Root = () => {
  return (
    <Router>
      <Container>
        <Switch>
          {sidebar.map(({ id, path, Component }) => (
            <Route path={path} component={Sidbar} />
          ))}
        </Switch>

        <Switch>
          {sidebar.map(({ id, path, Component }) => (
            <Route path={path} component={Component} />
          ))}

          <Route exact path="/">
            <Redirect to="/byurtmalar" />
          </Route>
          <Route path="*" component={Notfound} />
        </Switch>
      </Container>
    </Router>
  );
};

export default Root;
