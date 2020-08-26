import React from "react";
import { MainPage } from "pages";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route
          render={() => {
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;
