import React from "react";
import { MainPage } from "pages";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/music_tabs" component={MainPage} />
        <Route path="*" component={MainPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
